import logo from "../../assets/images/logoBlack.png";
import React, { useState, FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const Navbar: FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { route } = useRouter();

  const setRouteMargin = (): string =>
    route === "/" ? "nav-container" : "nav-container notHome";

  const handleClick = (): void => setToggle(!toggle);

  const toggleNavlists = (): string =>
    toggle === false ? "nav-lists-wrapper" : "nav-lists-wrapper active";

  const toggleHamburger = (): string =>
    toggle === false ? "hamburger" : "hamburger open";

  return (
    <nav className={setRouteMargin()}>
      <Link href="/" passHref>
        <section className="logo-container">
          <Image src={logo} layout="responsive" alt="logo" />
        </section>
      </Link>
      <section className={toggleNavlists()}>
        <ul className="nav-lists">
          <Link href="/about" passHref>
            <li>About</li>
          </Link>
          <Link href="/contributors" passHref>
            <li>Contributors</li>
          </Link>
          <Link href="/shop" passHref>
            <li id="nav-shop">Shop</li>
          </Link>
        </ul>
        <section className="small-scr-icons-wrapper">
          <ul className="small-scr-icons">
            <Link href="/contact" passHref>
              <li>
                <AiOutlineMail />
              </li>
            </Link>

            <li>
              <AiOutlineInstagram />
            </li>
          </ul>
        </section>
      </section>
      <section className="nav-icons-wrapper">
        <ul className="nav-icon">
          <Link href="/contact" passHref>
            <li>
              <AiOutlineMail />
            </li>
          </Link>
          <li>
            <AiOutlineInstagram />
          </li>
        </ul>
      </section>
      <div
        role="button"
        className={toggleHamburger()}
        onClick={handleClick}
        onKeyDown={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};
