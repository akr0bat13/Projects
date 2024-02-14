import React from "react";

import Header from "../Header";

import DynamicComponents from "./components/DynamicComponents";

const MainLayout = () => {
  return (
    <div className="main">
      <Header />
      <DynamicComponents />
    </div>
  );
};

export default MainLayout;
