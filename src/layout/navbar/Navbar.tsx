import logo from "../../assets/images/logo.png";
import React, { useState, FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { FaEnvelope } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const Navbar: FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = (): void => setToggle(!toggle);

  const toggleNavlists = (): string =>
    toggle === false ? "nav-lists-wrapper" : "nav-lists-wrapper active";

  const toggleHamburger = (): string =>
    toggle === false ? "hamburger" : "hamburger open";

  return (
    <motion.nav className="nav-container">
      <Link href="/" passHref>
        <motion.section
          className="logo-container"
          whileHover={{ backgroundColor: "#e9e9e7" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setToggle(false)}
        >
          <Image src={logo} layout="responsive" alt="logo" className="logo" />
        </motion.section>
      </Link>
      <section className={toggleNavlists()}>
        <ul className="nav-lists">
          <Link href="/about" passHref>
            <li onClick={handleClick}>About</li>
          </Link>
          <Link href="/contributors" passHref>
            <li onClick={handleClick}>Contributors</li>
          </Link>
          <Link href="/shop" passHref>
            <li onClick={handleClick}>Shop</li>
          </Link>
        </ul>
        <section className="small-scr-icons-wrapper">
          <ul className="small-scr-icons">
            <Link href="/contact" passHref>
              <li onClick={handleClick}>Contact</li>
            </Link>
            <a
              href="https://www.instagram.com/glassphotobook/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li onClick={handleClick}>Instagram</li>
            </a>
          </ul>
        </section>
      </section>
      <section className="nav-icons-wrapper">
        <ul className="nav-icon">
          <Link href="/contact" passHref>
            <li>
              <FaEnvelope />
            </li>
          </Link>
          <a
            href="https://www.instagram.com/glassphotobook/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <AiFillInstagram />
            </li>
          </a>
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
    </motion.nav>
  );
};
