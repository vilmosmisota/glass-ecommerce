import { motion } from "framer-motion";
import { FC } from "react";
import Footer from "./footer/footer";
import { Navbar } from "./navbar/Navbar";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />

      <>{children}</>
      <Footer />
    </>
  );
};

export default Layout;
