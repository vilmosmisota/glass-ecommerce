import { Icontents, IpropsContents } from "../interfaces/interfaces";
import { ContentfulClientApi, createClient, EntryCollection } from "contentful";
import DropDown from "../components/shop/checkOutForm/getCountries";
import Layout from "../layout/Layout";
import Form from "../components/shop/checkOutForm/form";

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
  return (
    <>
      <Layout />
      <main className="shop-page">
        <section></section>
        <section>
          <Form contents={contents} />
        </section>
      </main>
    </>
  );
}
