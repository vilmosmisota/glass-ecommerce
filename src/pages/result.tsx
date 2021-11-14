import Layout from "../layout/Layout";
import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import { fetchGetJSON } from "../utils/api-helper";
import LoaderIcon from "../components/loaderIcon/loaderIcon";

export default function Result(): JSX.Element {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.session_id ? `/api/checkout/${router.query.session_id}` : null,
    fetchGetJSON
  );

  if (error) return <div>failed to load</div>;

  function Processing() {
    return (
      <article>
        <h1>Processing your order...</h1>
        <p>
          Hold tight, your order is being processed. We will email you when your
          order succeeds.
        </p>
      </article>
    );
  }

  function Succeeded() {
    const name = data.payment_intent.shipping.name;
    const id = data.payment_intent.id;
    const { city, country, line1, line2, postal_code, state } =
      data.payment_intent.shipping.address;
    const amount = data.amount_total;
    return (
      <article>
        <h1>Payment successful</h1>
        <section className="message-container">
          <h2>Thank you for your purchase, {name}.</h2>
          <p>We hope that you will enjoy flipping through the photobook.</p>
          <p>
            We will send you an email once the order has been processed. If you
            have any quetions just email us at info@glassphotobook.shop
          </p>
        </section>
        <section className="order-details-container">
          <h2>Order details</h2>

          <div>
            <div>Amount Paid:</div>
            <div>£{amount / 100}</div>
          </div>
          <div>
            <div>Purchase ID:</div>
            <div>{id}</div>
          </div>
          <h3>Shipping:</h3>
          <div>
            <div>Country:</div>
            <div>{country}</div>
          </div>
          <div>
            <div>City:</div>
            <div>{city}</div>
          </div>
          <div>
            <div>Line 1:</div>
            <div>{line1}</div>
          </div>
          <div>
            <div>Line 2:</div>
            <div>{line2}</div>
          </div>
          <div>
            <div>Postal Code:</div>
            <div>{postal_code}</div>
          </div>
        </section>
      </article>
    );
  }

  function RequiresPaymentMethod() {
    return (
      <article>
        <h1>Payment failed</h1>
        <p>
          We are sorry, there was an error processing your payment. Please try
          again with a different payment method.
        </p>
      </article>
    );
  }

  function ShowResult() {
    switch (data.payment_intent.status) {
      case "processing":
        return <Processing />;
        break;

      case "requires_payment_method":
        return <RequiresPaymentMethod />;
        break;

      case "succeeded":
        return <Succeeded />;
        break;

      default:
        return <h1>Loading...</h1>;
    }
  }

  console.log(data);

  return (
    <Layout>
      <main className="result-container">
        {data ? <ShowResult /> : <LoaderIcon />}
      </main>
    </Layout>
  );
}
