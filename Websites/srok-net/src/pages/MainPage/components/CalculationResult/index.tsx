import React from "react";

import "./CalculationResult.scss";
import FiltrationComponent from "./components/FiltrationComponent";
import ViewContent from "./components/ViewContent";

const CalculationResult = () => {
  return (
    <div className="result-wrapper">
      <FiltrationComponent />
      <ViewContent />
    </div>
  );
};

export default CalculationResult;
