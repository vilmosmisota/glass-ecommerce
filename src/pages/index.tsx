import { getHomeData } from "../libs/data";
import { HomeContent, HomeProps } from "../types/homeTypes";
import HomeHeader from "../screens/home/HomeHeader";
import HomeMain from "../screens/home/HomeMain ";

export default function Home(props: HomeContent) {
  if (typeof props.data === "undefined") {
    return <h1>Oops, Something went wrong</h1>;
  }

  return (
    <>
      <HomeHeader {...props.data.header} />
      <HomeMain {...props.data.main} />
    </>
  );
}

export async function getStaticProps(): Promise<HomeProps> {
  const { data, isError } = await getHomeData();

  if (isError) {
    return {
      notFound: true,
      props: {
        data: undefined,
      },
    };
  }

  return {
    props: {
      data,
    },
  };
}
