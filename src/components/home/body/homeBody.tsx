import Image from "next/image";
import {
  IpropsContents,
  IpropsCountries,
} from "../../../interfaces/interfaces";

export default function HomeBody({
  contents,
  notFound,
}: IpropsContents): JSX.Element {
  const {
    quote,
    bodyImg1,
    bodyImg2,
    bodyImg3,
    bodyStatement1,
    bodyStatement2,
    bodyStatement3,
  } = contents[0].fields;

  console.log(contents);

  return (
    <main className="homeBody-container">
      <article className="body-statement">
        <section className="statement-container">
          <div>
            <h1>{bodyStatement1}</h1>
          </div>
        </section>
        <section>
          <Image
            src={`https:${bodyImg1.fields.file.url}`}
            height={bodyImg1.fields.file.details.image.height}
            width={bodyImg1.fields.file.details.image.width}
            alt="surfer is running to get some waves"
            layout="responsive"
          />
        </section>
      </article>
      <article className="body-statement">
        <section className="statement-container">
          <div>
            <h3>{bodyStatement2}</h3>
          </div>
        </section>
        <section className="img-container">
          <Image
            src={`https:${bodyImg2.fields.file.url}`}
            height={bodyImg2.fields.file.details.image.height}
            width={bodyImg2.fields.file.details.image.width}
            alt="rocky beach with a surfer"
            layout="responsive"
          />
        </section>
      </article>
      <article className="last-statement">
        <div>
          <h3>{bodyStatement3}</h3>
        </div>
      </article>
      <article className="body-statement">
        <Image
          src={`https:${bodyImg3.fields.file.url}`}
          height={bodyImg3.fields.file.details.image.height}
          width={bodyImg3.fields.file.details.image.width}
          alt="book cover"
          layout="responsive"
        />
      </article>
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
