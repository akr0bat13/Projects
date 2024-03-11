import React from "react";

import { useSelector } from "src/store";
import { showCalculatorFiltrationResult } from "src/store/slices/helperSlices/helperSlices";

import Result from "./components/Result";
import StateInfo from "./components/StateInfo";

const ViewContent = () => {
  const { showResult } = useSelector(showCalculatorFiltrationResult);
  return (
    <div className="view-content-wrapper">
      {showResult && <Result />}
      <StateInfo />
    </div>
  );
};

export default ViewContent;
