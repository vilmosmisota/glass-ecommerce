import { Icontents, IpropsContents } from "../interfaces/interfaces";
import {
  ContentfulClientApi,
  createClient,
  Entry,
  EntryCollection,
} from "contentful";
import Layout from "../layout/Layout";
import Photographers from "../components/contributers/Photographers";
import Artists from "../components/contributers/artists/Artists";

export default function Contributors({
  contents,
  notFound,
}: IpropsContents): JSX.Element {
  const photographers = contents
    .filter((el) => el.fields.role === "photographer")
    .sort((a, b) => a.fields.name.localeCompare(b.fields.name));

  const content = contents.filter((el) => el.fields.role === "content");

  const artists = contents
    .filter((el) => el.fields.role === "artist")
    .sort((a, b) => a.fields.name.localeCompare(b.fields.name));

  return (
    <main>
      <section className="contributors-statment-container">
        <h1>{content[0].fields.header}</h1>
      </section>
      <article className="photographers-container">
        <h1 className="section-title">Featured Photographers</h1>
        <Photographers photographers={photographers} notFound={notFound} />
      </article>
      <article className="artists-container">
        <div className="artists-section">
          <h1 className="section-title">Contributing Artists/Surfers</h1>
          <div className="artists-wrapper">
            <Artists artists={artists} notFound={notFound} />
          </div>
        </div>
      </article>
    </main>
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
