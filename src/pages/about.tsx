import Layout from "../layout/Layout";
import { Icontents, IpropsContents } from "../interfaces/interfaces";
import {
  ContentfulClientApi,
  createClient,
  Entry,
  EntryCollection,
} from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function About({
  contents,
  notFound,
}: IpropsContents): JSX.Element {
  const { quote, par1, par2, par3, par4, par5, par6, portrait } =
    contents[0].fields;

  return (
    // <Layout>
    <main className="about-container">
      <section className="quote-container">
        <h1>{quote}</h1>
      </section>
      <div className="intro">
        <picture className="portrait-container">
          <Image
            src={`https:${portrait.fields.file.url}`}
            height={portrait.fields.file.details.image.height}
            width={portrait.fields.file.details.image.width}
            alt="portrait of Lewis Arnold"
            layout="responsive"
          />
        </picture>
        <section className="intro-container">
          <p>{documentToReactComponents(par1)}</p>
        </section>
      </div>
      <section className="par-container">
        <p>{documentToReactComponents(par2)}</p>
        <p>{documentToReactComponents(par3)}</p>
        <p>{documentToReactComponents(par4)}</p>
        <p>{documentToReactComponents(par5)}</p>
        <p>{documentToReactComponents(par6)}</p>
      </section>
    </main>
    // </Layout>
  );
}

export async function getStaticProps(): Promise<Icontents> {
  const client: ContentfulClientApi = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
  });

  try {
    const res: EntryCollection<unknown> = await client.getEntries({
      content_type: "aboutPage",
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
