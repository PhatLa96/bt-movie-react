import { Box, Typography } from "@material-ui/core";
import React, { Component, Fragment } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <div style={{marginTop:70}}></div>
      {props.children}
      {/* children là nội dung mà mình bọc  */}
      <Footer />
    </Fragment>
  );
};

export default Layout;
