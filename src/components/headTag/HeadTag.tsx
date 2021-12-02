import Head from "next/head";

export default function HeadTag() {
  return (
    <Head>
      <title>Glass - North Sea - Limited Edition Photobook</title>
      <meta
        name="description"
        content="GLASS is a progressive, independent, tactile, limited edition
      photobook"
      />
      <meta
        name="keywords"
        content="surf, art, photobook, limited edition, north sea, photography, print"
      />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://glassphotobook.shop/" />

      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-touch-icon.png"
      />
      <link
        rel="shortcut icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
  );
}
