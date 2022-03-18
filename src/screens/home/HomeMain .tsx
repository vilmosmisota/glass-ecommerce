import Image from "next/image";
import { HomeMain } from "../../types/homeTypes";
import { motion, transform } from "framer-motion";
import { fadeIn } from "../../animations/commonAs";
import overlayer from "../../assets/images/video-overlay.png";
import useWindowDimensions from "../../utils/useWindowDimensions";

export default function Main(contents: HomeMain) {
  const { width, height } = useWindowDimensions();

  const {
    imgOne,
    imgTwo,
    imgThree,
    bodyStatement1,
    bodyStatement2,
    bodyStatement3,
  } = contents;

  function handleVideoRendering(width: number | undefined): string {
    if (typeof width === "undefined" || width > 840) {
      return "https://player.vimeo.com/video/689200358?&autoplay=1&loop=1&muted=1&controls=0";
    }

    return "https://player.vimeo.com/video/689200358?&autoplay=1&loop=1&autopause=0&muted=1";
  }

  return (
    <main className="homeBody-container">
      <article className="mainvideo-wrapper">
        <iframe
          src={handleVideoRendering(width)}
          width="640"
          height="281"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
        <motion.div
          className="overlayer"
          variants={fadeIn}
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0, transition: { delay: 0.4, duration: 0.5 } }}
        >
          <Image
            src={overlayer}
            layout="responsive"
            alt="overlay"
            loading="eager"
          />
        </motion.div>
      </article>

      <motion.article
        className="body-statement"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <section className="statement-container">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="lateShow"
            viewport={{ once: true }}
          >
            <h1>{bodyStatement1}</h1>
          </motion.div>
        </section>
        <section>
          <Image
            src={`https:${imgOne.url}`}
            height={imgOne.height}
            width={imgOne.width}
            alt="surfer is running to get some waves"
            layout="responsive"
          />
        </section>
      </motion.article>
      <motion.article
        className="body-statement"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <section className="statement-container">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="lateShow"
            viewport={{ once: true }}
          >
            <h3>{bodyStatement2}</h3>
          </motion.div>
        </section>
        <section className="img-container">
          <Image
            src={`https:${imgTwo.url}`}
            height={imgTwo.height}
            width={imgTwo.width}
            alt="rocky beach with a surfer"
            layout="responsive"
          />
        </section>
      </motion.article>
      <div className="last-statement">
        <motion.div
          className="last-statement__content"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3>{bodyStatement3}</h3>
        </motion.div>
        <motion.div
          className="last-statement__img"
          variants={fadeIn}
          initial="hidden"
          whileInView="slideDownLate"
          viewport={{ once: true }}
        >
          <Image
            src={`https:${imgThree.url}`}
            height={imgThree.height}
            width={imgThree.width}
            alt="book cover"
            layout="responsive"
          />
        </motion.div>
      </div>
      {/* <article className="video-wrapper">
        <iframe
          src="https://player.vimeo.com/video/648647757?title=0&byline=0&portrait=0"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </article> */}
    </main>
  );
}
