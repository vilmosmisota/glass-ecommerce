import Layout from "../layout/Layout";
import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import { fetchGetJSON } from "../utils/api-helper";

export default function Result(): JSX.Element {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.session_id ? `/api/checkout/${router.query.session_id}` : null,
    fetchGetJSON
  );

  if (error) return <div>failed to load</div>;

  return (
    <>
      <Layout />
      <article>
        <h1>result</h1>
        <pre>{data ? JSON.stringify(data, null, 2) : "Loading"}</pre>
        <h2>test</h2>
      </article>
    </>
  );
}
