import Image from "next/image";
import { HomeMain } from "../../types/homeTypes";

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
      <article className="body-statement">
        <section className="statement-container">
          <div>
            <h1>{bodyStatement1}</h1>
          </div>
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
      </article>
      <article className="body-statement">
        <section className="statement-container">
          <div>
            <h3>{bodyStatement2}</h3>
          </div>
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
      </article>
      <article className="last-statement">
        <div>
          <h3>{bodyStatement3}</h3>
        </div>
      </article>
      <article className="body-statement">
        <Image
          src={`https:${imgThree.url}`}
          height={imgThree.height}
          width={imgThree.width}
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
