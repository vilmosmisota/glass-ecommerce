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
          <h1>{statementOne}</h1>
        </article>
        <article className="statement2">
          <h1>{statementTwo}</h1>
        </article>
        <article className="statement3">
          <h1>{statementThree}</h1>
        </article>
      </section>
      <section className="image-section">
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
