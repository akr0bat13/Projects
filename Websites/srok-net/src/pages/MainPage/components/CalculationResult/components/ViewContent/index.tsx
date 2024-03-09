import React from "react";

import { useSelector } from "src/store";
import { calculatorFiltrationApilation } from "src/store/slices/CalculatorFiltration/calculatorFiltration.selectors";

import Result from "./components/Result";
import StateInfo from "./components/StateInfo";

const ViewContent = () => {
  const { isActive } = useSelector(calculatorFiltrationApilation);

  return (
    <div className="view-content-wrapper">
      {isActive && <Result />}
      <StateInfo />
    </div>
  );
};

export default ViewContent;
