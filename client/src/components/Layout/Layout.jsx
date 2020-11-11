import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
