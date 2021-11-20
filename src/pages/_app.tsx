import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Layout from "../layout/Layout";
import { invertScale } from "framer-motion/types/value/use-inverted-scale";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: { opacity: 0, transition: { duration: 0.3 } },
            pageAnimate: { opacity: 1, transition: { duration: 0.3 } },
            pageExit: {
              opacity: 0,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
export default MyApp;
