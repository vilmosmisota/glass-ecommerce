import Image from "next/image";
import { HomeMain } from "../../types/homeTypes";
import { motion } from "framer-motion";
import { fadeIn } from "../../animations/commonAs";

export default function Main(contents: HomeMain) {
  const {
    imgOne,
    imgTwo,
    imgThree,
    bodyStatement1,
    bodyStatement2,
    bodyStatement3,
  } = contents;

  return (
    <main className="homeBody-container">
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
      {/* <motion.article
        className="last-statement"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div>
          <h3>{bodyStatement3}</h3>
        </div>
      </motion.article>
      <motion.div
        className=""
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Image
          src={`https:${imgThree.url}`}
          height={imgThree.height}
          width={imgThree.width}
          alt="book cover"
          layout="responsive"
        />
      </motion.div> */}
      <article className="video-wrapper">
        <iframe
          src="https://player.vimeo.com/video/648647757?title=0&byline=0&portrait=0"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </article>
    </main>
  );
}
