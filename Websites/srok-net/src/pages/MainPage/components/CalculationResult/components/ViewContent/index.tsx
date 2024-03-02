import React from "react";

import Result from "./components/Result";
import StateInfo from "./components/StateInfo";

const ViewContent = () => {
  return (
    <div className="view-content-wrapper">
      <Result />
      <StateInfo />
    </div>
  );
};

export default ViewContent;
