import { IpropsPhotographers } from "../../interfaces/interfaces";
import Image from "next/image";
import getColor from "../../utils/getColor";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Photographers({
  photographers,
  notFound,
}: IpropsPhotographers): JSX.Element {
  const initialStateForIds: {
    [x: string]: boolean;
  }[] = photographers.map((el) => {
    const idFalse = { [el.sys.id]: false };
    return idFalse;
  });

  const [isBio, setBio] = useState<
    {
      [x: string]: boolean;
    }[]
  >(initialStateForIds);

  if (notFound) return <h1>404</h1>;
  if (!photographers.length) return <h1>Error</h1>;

  return (
    <>
      {photographers.map((person) => {
        const { name, bio, instagram, portfolioImage } = person.fields;
        const id: string = person.sys.id;

        const onClick = () => {
          setBio(
            (
              prev: {
                [x: string]: boolean;
              }[]
            ) => ({
              ...prev,
              [id as string]: !prev[id as any],
            })
          );
        };

        const firstName: string = name.split(" ")[0];
        const secondName: string = name.split(" ")[1];

        return (
          <article
            key={name}
            className="contributer-container"
            style={{ backgroundColor: getColor(name) }}
          >
            <div className="contributer-wrapper">
              <section className="contributer-name-wrapper" onClick={onClick}>
                <h1>
                  <span className="first-name">{firstName}</span>
                  <span>{" " + secondName}</span>
                </h1>
              </section>
              <div className="content-wrapper">
                <motion.section
                  className="bio-container"
                  initial={{
                    opacity: 0,
                    x: "-150%",
                  }}
                  animate={
                    !isBio[id]
                      ? {
                          opacity: 0,
                          x: "-150%",
                          scale: 0,
                          transition: { duration: 0.5 },
                        }
                      : {
                          opacity: 1,
                          x: 0,
                          scale: 1,
                          transition: { duration: 0.5 },
                        }
                  }
                >
                  <article className="bio-wrapper">
                    <p>{bio}</p>
                  </article>
                  <div className="social-wrapper">
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </div>
                </motion.section>
                <motion.section
                  className="contributer-img-wrapper"
                  animate={
                    isBio[id]
                      ? {
                          opacity: 0,
                          x: "150%",
                          scale: 0,
                          transition: { duration: 0.5 },
                        }
                      : {
                          opacity: 1,
                          x: 0,
                          scale: 1,
                          transition: { duration: 0.5 },
                        }
                  }
                >
                  <Image
                    src={`https:${portfolioImage.fields.file.url}`}
                    height={portfolioImage.fields.file.details.image.height}
                    width={portfolioImage.fields.file.details.image.width}
                    alt="contributors portfolio image"
                    className="portfolio-img"
                    layout="responsive"
                  />
                </motion.section>
              </div>
              <section className="toggle-container">
                <div className="toggle-wrapper" onClick={onClick}>
                  <div className="img-icon">
                    <motion.p
                      animate={
                        !isBio[id]
                          ? { WebkitTextStrokeWidth: 0, color: "black" }
                          : {
                              WebkitTextStrokeWidth: "1px",
                              color: "transparent",
                            }
                      }
                    >
                      Img
                    </motion.p>
                  </div>
                  <div className="bio-icon">
                    <motion.p
                      animate={
                        isBio[id]
                          ? { WebkitTextStrokeWidth: 0, color: "black" }
                          : {
                              WebkitTextStrokeWidth: "1px",
                              color: "transparent",
                            }
                      }
                    >
                      Bio
                    </motion.p>
                  </div>
                  <motion.div
                    className="hover"
                    animate={isBio[id] ? { x: 70 } : { x: 0 }}
                  ></motion.div>
                </div>
              </section>
            </div>
          </article>
        );
      })}
    </>
  );
}
