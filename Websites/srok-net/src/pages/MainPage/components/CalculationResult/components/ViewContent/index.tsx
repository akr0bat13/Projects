import React, { FC } from "react";

import LoadingScreen from "src/components/smart/LoadingScreen";
import { useSelector } from "src/store";
import { showCalculatorFiltrationResult } from "src/store/slices/helperSlices/helperSlices";

import Result from "./components/Result";
import StateInfo from "./components/StateInfo";

interface IViewContent {
  isLoadingCalculator: boolean;
}

const ViewContent: FC<IViewContent> = ({ isLoadingCalculator }) => {
  const { showResult } = useSelector(showCalculatorFiltrationResult);
  return (
    <div className="view-content-wrapper">
      {isLoadingCalculator && <LoadingScreen />}
      {showResult && <Result />}
      <StateInfo />
    </div>
  );
};

export default ViewContent;
