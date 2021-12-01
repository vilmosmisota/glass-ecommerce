import { Icontents, IpropsContents } from "../interfaces/interfaces";
import { ContentfulClientApi, createClient, EntryCollection } from "contentful";
import Form from "../components/shop/checkOutForm/form";
import Image from "next/image";
import logo from "../assets/images/VO1.svg";

export async function getStaticProps(): Promise<Icontents> {
  const client: ContentfulClientApi = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
  });

  try {
    const res: EntryCollection<unknown> = await client.getEntries({
      content_type: "shopPage",
    });

    return {
      props: {
        contents: res.items,
        notFound: false,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        contents: null,
        notFound: true,
      },
    };
  }
}

export default function Shop({
  contents,
  notFound,
}: IpropsContents): JSX.Element {
  const {
    countriesLists,
    price,
    defaultShippingFee,
    description,
    euShippingFee,

    ukShippingFee,
    bookImg,
    details,
  } = contents[0].fields;

  const ShowDetails = () => {
    return (
      <>
        {details.map((el: string, index: number) => {
          return <li key={index}>{el}</li>;
        })}
      </>
    );
  };

  return (
    // <Layout>
    <main className="shop-page">
      <section className="product-container">
        <div className="title-container">
          <h1>North Sea</h1>
          <figure className="logo-title">
            <Image src={logo} layout="responsive" alt="logo" className="logo" />
          </figure>
        </div>
        <div className="img-container">
          <Image
            src={`https:${bookImg.fields.file.url}`}
            height={bookImg.fields.file.details.image.height}
            width={bookImg.fields.file.details.image.width}
            alt="book cover"
            className="header-img"
            layout="responsive"
          />
        </div>
        <div className="description-container">
          <p>{description}</p>
        </div>
      </section>
      <section className="checkout-details-container">
        <div className="details-container">
          <h1>Launch Edition</h1>
          <ul>
            <ShowDetails />
          </ul>
        </div>
        <div className="checkout-container">
          <h1>Checkout</h1>
          <Form contents={contents} />
        </div>
      </section>
    </main>
    // </Layout>
  );
}
