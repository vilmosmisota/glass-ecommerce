import { Icontents, IpropsContents } from "../../../interfaces/interfaces";
import Image from "next/image";
import Link from "next/link";

export default function Header({
  contents,
  notFound,
}: IpropsContents): JSX.Element {
  console.log(contents);
  const { statementOne, statementTwo, statementThree, bookImg } =
    contents[0].fields;

  return (
    <header className="header-container">
      <section className="statement-container">
        <article className="statement1">
          <h1>
            GLASS VO1 is an independent, limited-edition photobook that curates
            international surf photography, art and writing to create a radical
          </h1>
        </article>
        <article className="statement2">
          <h1>&apos; exhibition in print &apos;</h1>
        </article>
        <article className="statement3">
          <h1>
            This launch edition is a collaborative edit of effective,
            contemporary work from respected creatives and emerging talent
            across all North Sea nations
          </h1>
        </article>
      </section>
      <section className="image-section">
        <div className="book-title-container">
          <h1>GLASS V01</h1>
          <h2>The North Sea</h2>
        </div>
        <div className="header-img-container">
          <Image
            src={`https:${bookImg.fields.file.url}`}
            height={bookImg.fields.file.details.image.height}
            width={bookImg.fields.file.details.image.width}
            alt="book cover"
            className="header-img"
            layout="responsive"
          />
        </div>

        <div className="button-wrapper">
          <Link href="/shop" passHref>
            <button>Shop</button>
          </Link>
        </div>
      </section>
    </header>
  );
}
