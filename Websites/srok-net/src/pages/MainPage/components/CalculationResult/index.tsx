import React, { useEffect } from "react";

import { useDispatch } from "src/store";
import { useUpdateCalculatorInfoMutation } from "src/store/api/lawsInfoPageApi.api";
import { toggleCalculatorInfo } from "src/store/slices/CalculatorResult";
import { showCalculatorResult } from "src/store/slices/helperSlices";
import { updateNotification } from "src/utils/helpers/updateNotification";
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
        dispatch(toggleCalculatorInfo(updatCalculatorData?.data));
      }
      dispatch(showCalculatorResult(true));
    } else {
      dispatch(showCalculatorResult(false));
      updateNotification("error", "Произоша ошибка, попробуйте еще раз");
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
