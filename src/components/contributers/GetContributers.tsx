import { IpropsContributers } from "../../interfaces/interfaces";
import Image from "next/image";

export default function GetContributers({
  contributers,
  notFound,
}: IpropsContributers): JSX.Element {
  let sortedContributers = contributers.sort((a, b) =>
    a.fields.name.localeCompare(b.fields.name)
  );

  if (notFound) return <h1>404</h1>;

  if (sortedContributers.length)
    return (
      <>
        {sortedContributers.map((person) => {
          const { name, bio, instagram, portolioImage } = person.fields;

          return (
            <article key={name} className="contributer-wrapper">
              <section className="contributer-name-wrapper">
                <h1>{name}</h1>
              </section>
              <section className="contributer-img-wrapper">
                <Image
                  src={`https:${portolioImage.fields.file.url}`}
                  height={portolioImage.fields.file.details.image.height}
                  width={portolioImage.fields.file.details.image.width}
                  alt="book cover"
                  className="portfolio-img"
                  layout="responsive"
                />
              </section>
            </article>
          );
        })}
      </>
    );

  return <h1>Oops, Something went wrong</h1>;
}
