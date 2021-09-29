import { Icontributers, IpropsContributers } from "../interfaces/interfaces";
import {
  ContentfulClientApi,
  createClient,
  Entry,
  EntryCollection,
} from "contentful";
import Layout from "../layout/Layout";
import GetContributers from "../components/contributers/GetContributers";

export async function getStaticProps(): Promise<Icontributers> {
  const client: ContentfulClientApi = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
  });

  try {
    const res: EntryCollection<unknown> = await client.getEntries({
      content_type: "contributers",
    });

    return {
      props: {
        contributers: res.items,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        notFound: true,
      },
    };
  }
}

export default function Contributors({
  contributers,
  notFound,
}: IpropsContributers): JSX.Element {
  return (
    <>
      <Layout />
      <main>
        <GetContributers contributers={contributers} notFound={notFound} />
      </main>
    </>
  );
}
