import { Icontents, IpropsContents } from "../interfaces/interfaces";
import {
  ContentfulClientApi,
  createClient,
  Entry,
  EntryCollection,
} from "contentful";
import Layout from "../layout/Layout";
import GetContributers from "../components/contributers/GetContributers";

export async function getStaticProps(): Promise<Icontents> {
  const client: ContentfulClientApi = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
  });

  try {
    const res: EntryCollection<unknown> = await client.getEntries({
      content_type: "contributorsPage",
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

export default function Contributors({
  contents,
  notFound,
}: IpropsContents): JSX.Element {
  return (
    <>
      <Layout />
      <main>
        <section className="contributors-statment-container">
          <h1>
            Collaborations with emerging talent and established practitioners
            shine light on contemporary projects and overlooked archives from
            the world of surfing.
          </h1>
        </section>
        <GetContributers contents={contents} notFound={notFound} />
      </main>
    </>
  );
}
