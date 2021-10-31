import Layout from "../layout/Layout";
import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import { fetchGetJSON } from "../utils/api-helper";

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
    return (
      <article>
        <h1>Payment successful</h1>
        <p>
          Your order has been placed. We will send you an email with your order
          details
        </p>
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
    <>
      <Layout />
      {data ? <ShowResult /> : <h1>loading</h1>}
    </>
  );
}
