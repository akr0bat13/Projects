import React from "react";

import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { Select, TOption } from "src/components/UI/Select/Select";
import { SwitchToggle } from "src/components/UI/SwitchToggle/SwitchToggle";
import { H } from "src/components/UI/Text/H";
import { TextInput } from "src/components/UI/TextInput/TextInput";

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
  return (
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
  );
};

export default Apilation;
