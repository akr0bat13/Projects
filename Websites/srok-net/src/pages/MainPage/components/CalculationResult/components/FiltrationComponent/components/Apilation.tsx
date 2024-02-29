import React from "react";
import ReactDatePicker from "react-datepicker";

import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { Select, TOption } from "src/components/UI/Select/Select";
import { SwitchToggle } from "src/components/UI/SwitchToggle/SwitchToggle";
import { H } from "src/components/UI/Text/H";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import CalendarIcon from "src/components/icons/CalendarIcon";

import { useFiltrationComponent } from "../hooks/useFiltrationComponent";

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

const Apilation = () => {
  const { active, showApilation, apilation, inputCalculatorApilationDate } =
    useFiltrationComponent();

  return (
    <div className="filtration-component-item">
      <div className="apilation-title">
        <H variant="lg" color="blue">
          Апеляция
        </H>
        <SwitchToggle onChange={showApilation} />
      </div>
      {active && (
        <>
          <InputContainer
            label="Срок по аппеляции"
            labelStyles={{ fontSize: 18 }}
            fieldStyles={{ display: "flex", gap: 20 }}
          >
            <TextInput placeholder="Лет" />
            <TextInput placeholder="Месяцев" />
          </InputContainer>
          <ReactDatePicker
            selected={apilation}
            onChange={inputCalculatorApilationDate}
            placeholderText="Дата аппеляции"
            dateFormat="dd.MM.yyyy"
            isClearable={!!apilation}
            showIcon={!apilation}
            icon={<CalendarIcon />}
          />
          <Select options={options} placeholder="Содержание под стражей" />
        </>
      )}
    </div>
  );
};

export default Apilation;
