import Image from "next/image";
import { animate, motion } from "framer-motion";
import logo from "../../assets/images/logoBlack.svg";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { CleanedImage } from "../../types/commonTypes";

type Props = {
  handleChange: () => void;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function LoaderAnimations({ handleChange }: Props) {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [endLoading, setEndLoading] = useState<boolean>(false);
  const url = "/api/loaderImages";
  const { data, error } = useSWR<CleanedImage[]>(url, fetcher);

  setTimeout(() => setLoading(false), 1500);
  useEffect(() => {
    if (data && !isLoading) {
      setEndLoading(true);
      console.log(endLoading);
    }
  }, [data, isLoading, endLoading]);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 1,
        duration: 1,
      },
      opacity: 1,
    },
    hidden: { opacity: 0 },
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
    <div className="loader-container">
      {error && (
        <div className="inner">
          <div>
            <h3>Oops, Something went wrong. We could not load the data</h3>
          </div>
        </div>
      )}

      {!endLoading && (
        <motion.div
          className="inner"
          exit={{
            opacity: 0,
            transition: {
              duration: 3,
            },
          }}
        >
          <motion.div className="opening" variants={opening}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Loading").start();
              }}
            />
          </motion.div>
        </motion.div>
      )}

      {endLoading && (
        <motion.div
          className="inner"
          variants={container}
          onAnimationComplete={handleChange}
          initial="hidden"
          animate="show"
        >
          {data?.map((img, i) => (
            <motion.div
              variants={item}
              key={img.title}
              style={{ zIndex: 8 - i }}
              className="img "
            >
              <Image
                src={`https:${img.url}`}
                quality={"45"}
                height={img.height}
                width={img.width}
                layout="responsive"
                alt="loader image"
              />
            </motion.div>
          ))}
          <motion.div className="img glass">
            <Image src={logo} layout="responsive" alt="loader image" />
          </motion.div>
        </motion.div>
      )}
      <div className="skip">
        <button onClick={handleChange}>Skip</button>
      </div>
    </div>
  );
}
