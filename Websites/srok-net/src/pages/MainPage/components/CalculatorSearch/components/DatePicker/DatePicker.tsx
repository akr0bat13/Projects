import ru from "date-fns/locale/ru";
import React, { CSSProperties, FC, useEffect, useState } from "react";
import ReactDatePicker, {
  registerLocale,
  setDefaultLocale,
} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import CalendarIcon from "src/components/icons/CalendarIcon";
import { useDispatch } from "src/store";
import {
  updateCalculatorComesInToForse,
  updateCalculatorVerdictDate,
} from "src/store/slices/CalculatorSearch";

import { InputContainer } from "../../../../../../components/UI/InputContainer/InputContainer";
import "./DatePicker.scss";

export type DateRange = {
  verdictDate: Date | null;
  comesInToForse: Date | null;
};

interface IDatePickerProps {
  onChange: (dates: DateRange) => void;
  dates: DateRange;
  sx?: CSSProperties;
  styleWrapper?: CSSProperties;
}

registerLocale("ru", ru);
setDefaultLocale("ru");

export const DatePicker: FC<IDatePickerProps> = ({
  onChange,
  dates,
  sx,
  styleWrapper,
}) => {
  const dispatch = useDispatch();

  const [selectedDates, setSelectedDates] = useState<DateRange>({
    verdictDate: null,
    comesInToForse: null,
  });

  useEffect(() => {
    setSelectedDates(dates);
  }, [dates]);

  const inputCalculatorVerdictDate = (event: Date | null) => {
    const newDate = event ? event.toLocaleDateString("ru-RU") : "";
    setSelectedDates({ ...selectedDates, verdictDate: event });
    dispatch(updateCalculatorVerdictDate(newDate as unknown as Date));
  };

  const inputCalculatorComesInToForse = (event: Date | null) => {
    const newDate = event ? event.toLocaleDateString("ru-RU") : "";
    setSelectedDates({ ...selectedDates, comesInToForse: event });
    dispatch(updateCalculatorComesInToForse(newDate as unknown as Date));
  };

  return (
    <div className="datepicker-wrapper" style={sx}>
      <InputContainer
        label="Дата приговора"
        color="blue"
        styleWrapper={styleWrapper}
      >
        <ReactDatePicker
          selected={selectedDates.verdictDate}
          startDate={selectedDates.verdictDate}
          endDate={selectedDates.comesInToForse}
          onChange={inputCalculatorVerdictDate}
          placeholderText="Дата приговора"
          calendarClassName="date-picker"
          dateFormat="dd.MM.yyyy"
          isClearable={!!selectedDates.verdictDate}
          showIcon={!selectedDates.verdictDate}
          icon={<CalendarIcon />}
        />
      </InputContainer>
      <InputContainer
        label="Вступает в силу"
        color="blue"
        styleWrapper={styleWrapper}
      >
        <ReactDatePicker
          selected={selectedDates.comesInToForse}
          startDate={selectedDates.verdictDate}
          endDate={selectedDates.comesInToForse}
          minDate={selectedDates.verdictDate}
          onChange={inputCalculatorComesInToForse}
          placeholderText="Вступает в силу"
          calendarClassName="date-picker"
          dateFormat="dd.MM.yyyy"
          isClearable={!!selectedDates.comesInToForse}
          showIcon={!selectedDates.comesInToForse}
          icon={<CalendarIcon />}
        />
      </InputContainer>
    </div>
  );
};
