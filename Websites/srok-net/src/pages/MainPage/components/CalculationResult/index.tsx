import React, { useEffect } from "react";

import { useDispatch } from "src/store";
import { useUpdateCalculatorInfoMutation } from "src/store/api/lawsInfoPageApi.api";
import { toggleCalculatorInfo } from "src/store/slices/CalculatorResult";
import { showCalculatorResult } from "src/store/slices/helperSlices";
import "./CalculationResult.scss";

import FiltrationComponent from "./components/FiltrationComponent";
import ViewContent from "./components/ViewContent";

const CalculationResult = () => {
  const dispatch = useDispatch();

  const [
    updateCalculatorInfo,
    {
      isSuccess: updatCalculatorSuccess,
      isLoading: isLoadingCalculator,
      isError: updatCalculatorError,
      data: updatCalculatorData,
    },
  ] = useUpdateCalculatorInfoMutation();

  useEffect(() => {
    if (updatCalculatorSuccess) {
      if (updatCalculatorData) {
        dispatch(toggleCalculatorInfo(updatCalculatorData));
      }
      dispatch(showCalculatorResult(true));
    } else {
      dispatch(showCalculatorResult(false));
    }
  }, [updatCalculatorSuccess, updatCalculatorError]);

  return (
    <div className="result-wrapper">
      <FiltrationComponent
        isLoadingCalculator={isLoadingCalculator}
        updateCalculatorInfo={updateCalculatorInfo}
      />
      <ViewContent isLoadingCalculator={isLoadingCalculator} />
    </div>
  );
};

export default CalculationResult;
