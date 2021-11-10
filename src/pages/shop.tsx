import { Icontents, IpropsContents } from "../interfaces/interfaces";
import { ContentfulClientApi, createClient, EntryCollection } from "contentful";
import Layout from "../layout/Layout";
import Form from "../components/shop/checkOutForm/form";
import Image from "next/image";

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

  function ShowDetails() {
    return details.map((el) => {
      return <p>{el}</p>;
    });
  }

  return (
    <Layout>
      <main className="shop-page">
        <section>
          <div className="book-title-container">
            <h1>GLASS V01</h1>
            <h2>The North Sea</h2>
          </div>
          <div className="header-img-container">
            <Image
              src={`https:${bookImg.fields.file.url}`}
              height={bookImg.fields.file.details.image.height}
              width={bookImg.fields.file.details.image.width}
              alt="book cover"
              className="header-img"
              layout="responsive"
            />
          </div>
          <div>
            <ShowDetails />
          </div>
        </section>
        <section>
          <div>
            <p>{description}</p>
          </div>
          <Form contents={contents} />
        </section>
      </main>
    </Layout>
  );
}
