import React from "react";

import Footer from "../Footer";
import Header from "../Header";

import DynamicComponents from "./components/DynamicComponents";

import "./MainLayout.scss";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <DynamicComponents />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
