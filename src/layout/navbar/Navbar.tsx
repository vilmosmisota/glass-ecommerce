import logo from "../../assets/images/logo.png";
import React, { useState, FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { FaRegEnvelope } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

export const Navbar: FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = (): void => setToggle(!toggle);

  const toggleNavlists = (): string =>
    toggle === false ? "nav-lists-wrapper" : "nav-lists-wrapper active";

  const toggleHamburger = (): string =>
    toggle === false ? "hamburger" : "hamburger open";

  return (
    <nav className="nav-container">
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
          <li id="nav-shop">Shop</li>
        </ul>
        <section className="small-scr-icons-wrapper">
          <ul className="small-scr-icons">
            <li>
              <FaRegEnvelope />
            </li>
            <li>
              <AiOutlineInstagram />
            </li>
          </ul>
        </section>
      </section>
      <section className="nav-icons-wrapper">
        <ul className="nav-icon">
          <li>
            <FaRegEnvelope />
          </li>
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
