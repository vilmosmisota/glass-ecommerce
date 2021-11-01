import { Icontents, IpropsContents } from "../interfaces/interfaces";
import {
  ContentfulClientApi,
  createClient,
  Entry,
  EntryCollection,
} from "contentful";
import Layout from "../layout/Layout";
import Photographers from "../components/contributers/Photographers";

export default function Contributors({
  contents,
  notFound,
}: IpropsContents): JSX.Element {
  const photographers = contents
    .filter((el) => el.fields.role === "photographer")
    .sort((a, b) => a.fields.name.localeCompare(b.fields.name));

  const content = contents.filter((el) => el.fields.role === "content");

  return (
    <>
      <Layout />
      <main>
        <section className="contributors-statment-container">
          <h1>{content[0].fields.header}</h1>
        </section>
        <article className="photographers-container">
          <h1 className="section-title">Photographers</h1>
          <Photographers photographers={photographers} notFound={notFound} />
        </article>
      </main>
    </>
  );
}

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
