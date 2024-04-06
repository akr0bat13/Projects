import React, { FC } from "react";

import { Button } from "src/components/UI/Button/Button";
import { useSelector } from "src/store";
import { calculatorFiltrationValues } from "src/store/slices/CalculatorFiltration/calculatorFiltration.selectors";
import { IFiltrationDate } from "src/utils/types/CalculatorFiltration.types";

import Apilation from "./components/Apilation";
import PreventiveMeasure from "./components/PreventiveMeasure";
import PunishmentType from "./components/PunishmentType";

interface IFiltrationComponent {
  isLoadingCalculator: boolean;
  updateCalculatorInfo: any;
}

const FiltrationComponent: FC<IFiltrationComponent> = ({
  isLoadingCalculator,
  updateCalculatorInfo,
}) => {
  const {
    punishmentType,
    timeUnderArrest,
    rejectingCurrentDoings,
    homeArrest,
    apilation,
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
    // updateCalculatorInfo()
  };

  const checkButtonDisabled = () => {
    // const measures = [homeArrest, timeUnderArrest, rejectingCurrentDoings];
    // // eslint-disable-next-line no-debugger
    // debugger;
    // for (const measure of measures) {
    //   if (measure.isActive) {
    //     const hasCommonValues = isValuesExisting(measure.values);
    //     const hasNullValues = measure.values.some(
    //       (value) => value.start === null || value.end === null
    //     );
    //     if (hasCommonValues || hasNullValues) {
    //       return false;
    //     }
    //   }
    // }

    // if (apilation.isActive) {
    //   const { years, month, apilationDate, detention } = apilation;
    //   if (
    //     years === "" ||
    //     month === "" ||
    //     apilationDate === null ||
    //     detention === null
    //   ) {
    //     return false;
    //   }
    // }

    // return true;
    const homeArrestActive = homeArrest.isActive;
    const timeUnderArrestActive = timeUnderArrest.isActive;
    const rejectingCurrentDoingsActive = rejectingCurrentDoings.isActive;
    const apilationActive = apilation.isActive;

    if (homeArrestActive) {
      const checkForCommons = isValuesExisting(timeUnderArrest.values);
      if (checkForCommons) return false;
      const hasNullValues = homeArrest.values.some(
        (value) => value.start === null || value.end === null
      );
      if (hasNullValues) {
        return false;
      }
    }
    if (timeUnderArrestActive) {
      const checkForCommons = isValuesExisting(timeUnderArrest.values);
      if (checkForCommons) return false;
      const hasNullValues = timeUnderArrest.values.some(
        (value) => value.start === null || value.end === null
      );
      if (hasNullValues) {
        return false;
      }
    }
    if (rejectingCurrentDoingsActive) {
      const checkForCommons = isValuesExisting(rejectingCurrentDoings.values);
      if (checkForCommons) return false;
      const hasNullValues = rejectingCurrentDoings.values.some(
        (value) => value.start === null || value.end === null
      );
      if (hasNullValues) {
        return false;
      }
    }

    if (apilationActive) {
      if (
        apilation.years === "" ||
        apilation.month === "" ||
        apilation.apilationDate === null ||
        apilation.detention === null
      ) {
        return false;
      }
    }

    return true;
  };

  const buttonDisabled =
    checkButtonDisabled() && punishmentType.isActive === true;
  return (
    <div className="filtration-component-wrapper">
      <PreventiveMeasure />
      <Apilation />
      <PunishmentType />
      <Button
        label="Рассчитать"
        color="primary"
        disabled={!buttonDisabled || isLoadingCalculator}
        onClick={submitButton}
      />
    </div>
  );
};

export default FiltrationComponent;
