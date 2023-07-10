import React from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.component}
      <Footer />
    </>
  );
};

export default Layout;
