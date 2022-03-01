import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import logo from "../../assets/images/VO1.svg";
import { HomeHeader } from "../../types/homeTypes";

export default function Header(contents: HomeHeader) {
  const { statementOne, statementTwo, statementThree, cover } = contents;

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
        <div className="book-title-container">
          <h1>North Sea</h1>
          <figure className="logo-title">
            <Image src={logo} layout="responsive" alt="logo" className="logo" />
          </figure>
        </div>
        <div className="header-img-container">
          <Image
            src={`https:${cover.url}`}
            height={cover.height}
            width={cover.width}
            alt="book cover"
            className="header-img"
            layout="responsive"
          />
        </div>

        <div className="button-wrapper">
          <Link href="/shop" passHref>
            <motion.button whileTap={{ scale: 0.9 }}>Shop</motion.button>
          </Link>
        </div>
      </section>
    </header>
  );
}
