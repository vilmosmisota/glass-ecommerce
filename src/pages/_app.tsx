import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Layout from "../layout/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import HeadTag from "../components/headTag/HeadTag";
import LoaderAnimations from "../screens/loader/loaderAnimations";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [animate, setAnimate] = useState<boolean>(true);
  const route = useRouter();

  useEffect(() => {
    if (route.asPath === "/" && loading === true) {
      setAnimate(true);
    } else {
      setAnimate(false);
      setLoading(false);
    }
  }, [route.asPath, loading]);

  function handleChange() {
    setLoading(false);
  }

  const App = () => {
    return (
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={{
              pageInitial: { opacity: 0, transition: { duration: 1 } },
              pageAnimate: { opacity: 1, transition: { duration: 1 } },
              pageExit: {
                opacity: 0,
                transition: { duration: 1 },
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    );
  };

  return (
    <>
      <HeadTag />
      {animate ? <LoaderAnimations handleChange={handleChange} /> : <App />}
    </>
  );
}
export default MyApp;
