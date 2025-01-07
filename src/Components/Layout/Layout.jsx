import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section>{children}</section>
      <Footer />
    </>
  );
};

export default Layout;
