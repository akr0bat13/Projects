/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
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
    timeUnderArrestValues,
    rejectingCurrentDoingsValues,
  } = useFiltrationComponent();

  const [isDateOverlap, setIsDateOverlap] = useState(false);

  useEffect(() => {
    const checkDateOverlap = () => {
      const allValues = [
        ...homeArrestValues,
        ...timeUnderArrestValues,
        ...rejectingCurrentDoingsValues,
      ];

      for (let i = 0; i < allValues.length; i++) {
        const start1 = allValues[i].start;
        const end1 = allValues[i].end;

        if (start1 === null || end1 === null) {
          continue;
        }

        for (let j = i + 1; j < allValues.length; j++) {
          const start2 = allValues[j].start;
          const end2 = allValues[j].end;

          if (start2 === null || end2 === null) {
            continue;
          }

          if (start1 <= end2 && end1 >= start2) {
            setIsDateOverlap(true);
            return;
          }
        }
      }

      setIsDateOverlap(false);
    };

    checkDateOverlap();
  }, [homeArrestValues, timeUnderArrestValues, rejectingCurrentDoingsValues]);
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
        error={isDateOverlap}
      />

      <FiltrationComponentItem
        title={TimeUnderArrestTitle}
        active={TimeUnderArrestActive}
        values={timeUnderArrestValues}
        onToggleChange={handlePreventiveMeasureChange}
        onValueChange={setUpdateFiltrationComponentValue}
        onRemoveValue={removeFiltrationComponentValue}
        onAddValue={addFiltrationComponentValue}
        error={isDateOverlap}
      />

      <FiltrationComponentItem
        title={RejectingDoingsTitle}
        active={RejectingDoingsActive}
        values={rejectingCurrentDoingsValues}
        onToggleChange={handlePreventiveMeasureChange}
        onValueChange={setUpdateFiltrationComponentValue}
        onRemoveValue={removeFiltrationComponentValue}
        onAddValue={addFiltrationComponentValue}
        error={isDateOverlap}
      />
    </div>
  );
};

export default PreventiveMeasure;
