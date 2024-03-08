/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactDatePicker from "react-datepicker";

import { Button } from "src/components/UI/Button/Button";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { SwitchToggle } from "src/components/UI/SwitchToggle/SwitchToggle";
import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import AddIcon from "src/components/icons/AddIcon";
import CalendarIcon from "src/components/icons/CalendarIcon";
import RemoveIcon from "src/components/icons/RemoveIcon";
import { useSelector } from "src/store";
import {
  calculatorHomeArrest,
  calculatorRejectingCurrentDoings,
  calculatorTimeUnderArrest,
} from "src/store/slices/CalculatorFiltration/calculatorFiltration.selectors";

import { useFiltrationComponent } from "../hooks/useFiltrationComponent";

import FiltrationComponentItem from "./FiltrationComponentItem";

const PreventiveMeasure = () => {
  const { isActive: HomeArrestActive, title: HomeArrestTitle } =
    useSelector(calculatorHomeArrest);
  const { isActive: TimeUnderArrestActive, title: TimeUnderArrestTitle } =
    useSelector(calculatorTimeUnderArrest);

  const { isActive: RejectingDoingsActive, title: RejectingDoingsTitle } =
    useSelector(calculatorRejectingCurrentDoings);

  const {
    handlePreventiveMeasureChange,
    setUpdateFiltrationComponentValue,
    homeArrestValues,
    addFiltrationComponentValue,
    removeFiltrationComponentValue,
    timeUnderArrest,
    rejectingCurrentDoings,
  } = useFiltrationComponent();

  return (
    <div className="filtration-component-item">
      <H variant="lg" color="blue">
        Мера пресечения
      </H>
      <FiltrationComponentItem
        title={HomeArrestTitle}
        active={HomeArrestActive}
        values={homeArrestValues}
        onToggleChange={handlePreventiveMeasureChange}
        onValueChange={setUpdateFiltrationComponentValue}
        onRemoveValue={removeFiltrationComponentValue}
        onAddValue={addFiltrationComponentValue}
      />

      <FiltrationComponentItem
        title={TimeUnderArrestTitle}
        active={TimeUnderArrestActive}
        values={timeUnderArrest}
        onToggleChange={handlePreventiveMeasureChange}
        onValueChange={setUpdateFiltrationComponentValue}
        onRemoveValue={removeFiltrationComponentValue}
        onAddValue={addFiltrationComponentValue}
      />

      <FiltrationComponentItem
        title={RejectingDoingsTitle}
        active={RejectingDoingsActive}
        values={rejectingCurrentDoings}
        onToggleChange={handlePreventiveMeasureChange}
        onValueChange={setUpdateFiltrationComponentValue}
        onRemoveValue={removeFiltrationComponentValue}
        onAddValue={addFiltrationComponentValue}
      />
    </div>
  );
};

export default PreventiveMeasure;
