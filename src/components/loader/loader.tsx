import Image from "next/image";
import { animate, motion } from "framer-motion";
import img1 from "../../assets/images/for animations/1.jpg";
import img2 from "../../assets/images/for animations/2.jpg";
import img3 from "../../assets/images/for animations/3.jpg";
import img4 from "../../assets/images/for animations/4.jpg";
import img5 from "../../assets/images/for animations/5.jpg";
import img6 from "../../assets/images/for animations/6.jpg";
import img7 from "../../assets/images/for animations/7.jpg";
import logo from "../../assets/images/logoBlack.png";
import Typewriter from "typewriter-effect";

export default function Loader({
  setLoading,
}: {
  setLoading: any;
}): JSX.Element {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 1, y: 0 },
    show: {
      opacity: 1,
      y: "-200%",
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.5,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  const opening = {
    show: {
      opacity: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.article
      variants={container}
      // onAnimationComplete={() => setLoading(true)}
      initial="hidden"
      animate="show"
      className="loader-container"
    >
      <motion.div
        className="inner"
        // animate={{
        //   opacity: 0,
        //   transition: {
        //     delay: 6.7,
        //   },
        // }}
      >
        <motion.div className="opening" variants={opening}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Loading").start();
            }}
          />
        </motion.div>
        <motion.div variants={item} className="img a">
          <Image src={img1} layout="responsive" alt="loader image" />
        </motion.div>
        <motion.div variants={item} className="img b">
          <Image src={img2} layout="responsive" alt="loader image" />
        </motion.div>
        <motion.div variants={item} className="img c">
          <Image src={img3} layout="responsive" alt="loader image" />
        </motion.div>
        <motion.div variants={item} className="img d">
          <Image src={img4} layout="responsive" alt="loader image" />
        </motion.div>
        <motion.div variants={item} className="img e">
          <Image src={img5} layout="responsive" alt="loader image" />
        </motion.div>
        <motion.div variants={item} className="img f">
          <Image src={img6} layout="responsive" alt="loader image" />
        </motion.div>
        <motion.div variants={item} className="img g">
          <Image src={img7} layout="responsive" alt="loader image" />
        </motion.div>
        <motion.div className="img glass">
          <Image src={logo} layout="responsive" alt="loader image" />
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
