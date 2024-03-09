import { addDays, parse } from "date-fns";
import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";

import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { Select } from "src/components/UI/Select/Select";
import { SwitchToggle } from "src/components/UI/SwitchToggle/SwitchToggle";
import { H } from "src/components/UI/Text/H";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import CalendarIcon from "src/components/icons/CalendarIcon";
import { useSelector } from "src/store";
import { calculatorFiltrationApilation } from "src/store/slices/CalculatorFiltration/calculatorFiltration.selectors";
import { calculatorSearchValues } from "src/store/slices/CalculatorSearch/calculatorSearch.selectors";

import { useFiltrationComponent } from "../hooks/useFiltrationComponent";

const Apilation = () => {
  const {
    apilationProps,
    inputCalculatorApilationDate,
    inputApilationMonth,
    inputApilationYear,
    apilationSelect,
    apilationSelectHandler,
    options,
    handleApilationChange,
  } = useFiltrationComponent();
  const { isActive } = useSelector(calculatorFiltrationApilation);
  const { verdictDate } = useSelector(calculatorSearchValues);
  const [minDatePickerDate, setMinDatePickerDate] = useState<Date | null>(null);

  useEffect(() => {
    if (verdictDate !== null) {
      const formattedDate = parse(`${verdictDate}`, "dd.MM.yyyy", new Date());
      const minDate = addDays(formattedDate, 15);
      setMinDatePickerDate(minDate);
    }
  }, [verdictDate]);

  return (
    <div className="filtration-component-item">
      <div className="apilation-title">
        <H variant="lg" color="blue">
          Апеляция
        </H>
        <SwitchToggle onChange={handleApilationChange} />
      </div>
      {isActive && (
        <>
          <InputContainer
            label="Срок по аппеляции"
            labelStyles={{ fontSize: 18 }}
            fieldStyles={{ display: "flex", gap: 20 }}
          >
            <TextInput placeholder="Лет" onChange={inputApilationYear} />
            <TextInput placeholder="Месяцев" onChange={inputApilationMonth} />
          </InputContainer>
          <ReactDatePicker
            selected={apilationProps.apilationDate}
            onChange={inputCalculatorApilationDate}
            placeholderText="Дата аппеляции"
            dateFormat="dd.MM.yyyy"
            minDate={minDatePickerDate}
            isClearable={!!apilationProps.apilationDate}
            showIcon={!apilationProps.apilationDate}
            icon={<CalendarIcon />}
          />
          <Select
            options={options}
            value={apilationSelect}
            handleChange={apilationSelectHandler}
            placeholder="Содержание под стражей"
          />
        </>
      )}
    </div>
  );
};

export default Apilation;
