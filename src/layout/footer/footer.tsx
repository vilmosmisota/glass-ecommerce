import SignUpForm from "../../components/signUpForm/signUpForm";
import logo from "../../assets/images/logoBlack.png";
import Image from "next/image";
import {
  FaCcVisa,
  FaEnvelope,
  FaCcAmex,
  FaCcMastercard,
  FaCcStripe,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

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
                <figure>
                  <FaEnvelope />
                </figure>
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
                <figure>
                  <AiFillInstagram />
                </figure>
              </div>
            </section>
          </article>
          <section className="footer-details-container">
            <ul>
              <li>Terms & Conditions</li>
              <li>Shipping & Returns</li>
              <li>Sustainability</li>
              <li>Privacy policy</li>
            </ul>
          </section>
        </div>
        <div className="footer-logo-container">
          <section className="footer-logo-wrapper">
            <Image src={logo} layout="responsive" alt="logo" className="logo" />
          </section>
          <section className="footer-payment-logo-container">
            <ul>
              <li>
                <FaCcVisa />
              </li>
              <li>
                <FaCcAmex />
              </li>
              <li>
                <FaCcMastercard />
              </li>

              <li>
                <FaCcStripe />
              </li>
            </ul>
          </section>
        </div>
        <article className="copyright-container">
          <ul>
            <li>© Copyright {year()}, Glass VO1</li>
            <li>Web Design & Development by Vilmos Misota</li>
          </ul>
        </article>
      </footer>
    </div>
  );
}
