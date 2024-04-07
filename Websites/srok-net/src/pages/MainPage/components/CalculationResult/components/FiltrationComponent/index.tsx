import React, { FC, useEffect, useState } from "react";

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
  const [homeArrestStatus, setHomeArrestStatus] = useState(false);
  const [timeUnderArrestStatus, setTimeUnderArrestStatus] = useState(false);
  const [rejectingCurrentDoingsStatus, setRejectingCurrentDoingsStatus] =
    useState(false);
  const [apilationStatus, setApilationStatus] = useState(false);

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

  const checkButtonDisabled = () => {
    const homeArrestActive = homeArrest.isActive;
    const timeUnderArrestActive = timeUnderArrest.isActive;
    const rejectingCurrentDoingsActive = rejectingCurrentDoings.isActive;
    const apilationActive = apilation.isActive;

    if (homeArrestActive) {
      const hasExistingValues = isValuesExisting(homeArrest.values);

      setHomeArrestStatus(false);
      if (hasExistingValues) {
        setHomeArrestStatus(true);
      }
    }
    if (timeUnderArrestActive) {
      const hasExistingValues = isValuesExisting(timeUnderArrest.values);

      setTimeUnderArrestStatus(false);
      if (hasExistingValues) {
        setTimeUnderArrestStatus(true);
      }
    }
    if (rejectingCurrentDoingsActive) {
      const hasExistingValues = isValuesExisting(rejectingCurrentDoings.values);

      setRejectingCurrentDoingsStatus(false);
      if (hasExistingValues) {
        setRejectingCurrentDoingsStatus(true);
      }
    }

    if (
      !homeArrestActive &&
      !timeUnderArrestActive &&
      !rejectingCurrentDoingsActive
    ) {
      setHomeArrestStatus(true);
      setTimeUnderArrestStatus(true);
      setRejectingCurrentDoingsStatus(true);
    }

    if (apilationActive) {
      setApilationStatus(true);
      if (
        apilation.years === "" ||
        apilation.month === "" ||
        apilation.apilationDate === null ||
        apilation.detention === null
      ) {
        setApilationStatus(false);
      }
    }
  };

  useEffect(() => {
    checkButtonDisabled();
  }, [homeArrest, timeUnderArrest, rejectingCurrentDoings, apilation]);

  const submitButton = () => {
    // updateCalculatorInfo()
  };

  const result =
    timeUnderArrestStatus &&
    homeArrestStatus &&
    rejectingCurrentDoingsStatus &&
    apilationStatus;

  const buttonDisabled = result && punishmentType.isActive === true;

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
