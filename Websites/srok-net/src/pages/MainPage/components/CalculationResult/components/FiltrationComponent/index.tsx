import React from "react";

import { Checkbox } from "src/components/UI/Checkbox/Checkbox";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { Select, TOption } from "src/components/UI/Select/Select";
import { SwitchToggle } from "src/components/UI/SwitchToggle/SwitchToggle";
import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import { useSelector } from "src/store";
import { calculatorFiltrationValues } from "src/store/slices/CalculatorFiltration/calculatorFiltration.selectors";

const options: TOption[] = [
  {
    label: "value1",
    value: "value1",
  },
  {
    label: "value2",
    value: "value2",
  },
  {
    label: "value3",
    value: "value3",
  },
];

const FiltrationComponent = () => {
  const { preventiveMeasure, punishmentType } = useSelector(
    calculatorFiltrationValues
  );
  return (
    <div className="filtration-component-wrapper">
      <div className="filtration-component-item">
        <H variant="lg" color="blue">
          Мера пресечения
        </H>
        {preventiveMeasure.map((item) => {
          const { title } = item;
          return (
            <div key={title} className="filtration-preventive-measure-item">
              <P variant="md">{title}</P>
              <SwitchToggle />
            </div>
          );
        })}
      </div>
      <div className="filtration-component-item">
        <div className="apilation-title">
          <H variant="lg" color="blue">
            Апеляция
          </H>
          <SwitchToggle />
        </div>
        <InputContainer
          label="Срок по аппеляции"
          labelStyles={{ fontSize: 18 }}
          fieldStyles={{ display: "flex", gap: 20 }}
        >
          <TextInput placeholder="Лет" />
          <TextInput placeholder="Месяцев" />
        </InputContainer>
        {/* <DatePicker
          dates={dates}
          onChange={setDates}
          sx={{
            gap: 10,
          }}
          styleWrapper={{ width: 190 }}
        /> */}
        <Select options={options} placeholder="Содержание под стражей" />
      </div>
      <div className="filtration-component-item">
        <H variant="lg" color="blue">
          Вид наказания
        </H>
        {punishmentType.map((item) => {
          const { title } = item;
          return (
            <div key={title} className="filtration-preventive-measure-item">
              <P variant="md">{title}</P>
              <Checkbox />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FiltrationComponent;
