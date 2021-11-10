import Layout from "../layout/Layout";
import { ContentfulClientApi, createClient, EntryCollection } from "contentful";
import { Icontents, IpropsContents } from "../interfaces/interfaces";
import Header from "../components/home/header/Header";
import HomeBody from "../components/home/body/homeBody";

export async function getStaticProps(): Promise<Icontents> {
  const client: ContentfulClientApi = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
  });

  try {
    const res: EntryCollection<unknown> = await client.getEntries({
      content_type: "homePage",
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

export default function Home({
  contents,
  notFound,
}: IpropsContents): JSX.Element {
  console.log(contents);
  return (
    <>
      <Layout>
        <Header contents={contents} notFound={notFound} />
        <HomeBody />
      </Layout>
    </>
  );
}
