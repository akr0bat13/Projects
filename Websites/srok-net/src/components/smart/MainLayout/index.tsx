import React from "react";

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
    </>
  );
};

export default MainLayout;
