/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { Button } from "src/components/UI/Button/Button";
import { useDispatch, useSelector } from "src/store";
import { calculatorFiltrationValues } from "src/store/slices/CalculatorFiltration/calculatorFiltration.selectors";
import { showCalculatorResult } from "src/store/slices/helperSlices";
import { IFiltrationDate } from "src/utils/types/CalculatorFiltration.types";

import Apilation from "./components/Apilation";
import PreventiveMeasure from "./components/PreventiveMeasure";
import PunishmentType from "./components/PunishmentType";

const FiltrationComponent = () => {
  const dispatch = useDispatch();

  const {
    punishmentType,
    timeUnderArrest,
    rejectingCurrentDoings,
    homeArrest,
  } = useSelector(calculatorFiltrationValues);

  const emptyField: unknown = ""; //todo переделать

  const isValuesExisting = (values: IFiltrationDate[]) => {
    if (values) {
      return values.some(
        (value) =>
          value.end !== null &&
          value.end !== emptyField &&
          value.start !== null &&
          value.start !== emptyField
      );
    }
    return false;
  };

  const submitButton = () => {
    dispatch(showCalculatorResult(true));
  };

  const homeArrestActive = homeArrest.isActive;
  const timeUnderArrestActive = timeUnderArrest.isActive;
  const rejectingCurrentDoingsActive = rejectingCurrentDoings.isActive;

  const buttonDisabled =
    // ((homeArrestActive && isValuesExisting(homeArrest.values)) ||
    //   (timeUnderArrestActive && isValuesExisting(timeUnderArrest.values)) ||
    //   (rejectingCurrentDoingsActive &&
    //     isValuesExisting(rejectingCurrentDoings.values))) &&
    punishmentType.some((item) => item.value === true);
  return (
    <div className="filtration-component-wrapper">
      <PreventiveMeasure />
      <Apilation />
      <PunishmentType />
      <Button
        label="Рассчитать"
        color="primary"
        disabled={!buttonDisabled}
        onClick={submitButton}
      />
    </div>
  );
};

export default FiltrationComponent;
