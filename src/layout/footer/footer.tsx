import SignUpForm from "../../components/signUpForm/signUpForm";
import logo from "../../assets/images/logoBlack.svg";
import Image from "next/image";
import {
  FaCcVisa,
  FaEnvelope,
  FaCcAmex,
  FaCcMastercard,
  FaCcStripe,
} from "react-icons/fa";
import { AiFillInstagram, AiFillLock } from "react-icons/ai";
import { motion } from "framer-motion";

import Link from "next/link";

export default function Footer() {
  const year = () => new Date().getFullYear();

  return (
    <div className="footer-wrapper">
      <footer className="footer-container">
        <div className="footer-main-wrapper">
          <article>
            <section>
              <div>
                <h3>Get updates</h3>
              </div>
              <SignUpForm />
            </section>
            <section>
              <div>
                <h3>Get in touch</h3>
              </div>
              <div>
                <p>info@glassphotobook.shop</p>
              </div>
              <div>
                <motion.figure
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a href="mailto:info@glassphotobook.shop">
                    <FaEnvelope />
                  </a>
                </motion.figure>
              </div>
            </section>
            <section>
              <div>
                <h3>Get social</h3>
              </div>
              <div>
                <p>Instagram</p>
              </div>
              <div>
                <motion.figure
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href="https://www.instagram.com/glassphotobook/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram />
                  </a>
                </motion.figure>
              </div>
            </section>
          </article>
          <section className="footer-details-container">
            <ul>
              <Link href="/terms" passHref>
                <li>Terms & Conditions</li>
              </Link>
              <Link href="/shipping" passHref>
                <li>Shipping & Returns</li>
              </Link>
              <Link href="/sustainability" passHref>
                <li>Sustainability</li>
              </Link>
              <Link href="/privacy" passHref>
                <li>Privacy policy</li>
              </Link>
            </ul>
          </section>
        </div>
        <div className="footer-logo-container">
          <section className="footer-logo-wrapper">
            <Image src={logo} layout="responsive" alt="logo" className="logo" />
          </section>
          <section className="secured">
            <p>
              <AiFillLock />
            </p>
            <p>Secured payments</p>
            <p>Powered by Stripe</p>
          </section>
          <section className="footer-payment-logo-container">
            <ul>
              <div>
                <li>
                  <FaCcVisa />
                </li>
                <li>
                  <FaCcAmex />
                </li>
              </div>
              <div>
                <li>
                  <FaCcMastercard />
                </li>

                <li>
                  <FaCcStripe />
                </li>
              </div>
            </ul>
          </section>
        </div>
        <article className="copyright-container">
          <ul>
            <li>© Copyright {year()}, Glass</li>
            <li>Web Design & Development by Vilmos Misota</li>
          </ul>
        </article>
      </footer>
    </div>
  );
}
