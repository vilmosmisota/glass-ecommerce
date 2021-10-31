import { IpropsContents } from "../../interfaces/interfaces";
import Image from "next/image";
import getColor from "../../utils/getColor";
import { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";

export default function GetContributers({
  contents,
  notFound,
}: IpropsContents): JSX.Element {
  const sortedContributers = contents.sort((a, b) =>
    a.fields.name.localeCompare(b.fields.name)
  );

  const initialStateForIds: {
    [x: string]: boolean;
  }[] = sortedContributers.map((el) => {
    const idFalse = { [el.sys.id]: false };
    return idFalse;
  });

  const [isBio, setBio] = useState<
    {
      [x: string]: boolean;
    }[]
  >(initialStateForIds);

  if (notFound) return <h1>404</h1>;
  if (!contents.length) return <h1>Error</h1>;

  return (
    <>
      {sortedContributers.map((person) => {
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
              [id]: !prev[id as any],
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
              <section className="contributer-img-wrapper">
                <Image
                  src={`https:${portfolioImage.fields.file.url}`}
                  height={portfolioImage.fields.file.details.image.height}
                  width={portfolioImage.fields.file.details.image.width}
                  alt="book cover"
                  className="portfolio-img"
                  layout="responsive"
                  onClick={onClick}
                />
              </section>
              {/* <section
                className="bio-container"
              >
                <div className="social-wrapper">
                  <a href={instagram} target="_blank" rel="noopener noreferrer">
                    <AiOutlineInstagram />
                  </a>
                </div>
                <article className="bio-wrapper">
                  <p>{bio}</p>
                </article>
              </section> */}
            </div>
          </article>
        );
      })}
    </>
  );
}
