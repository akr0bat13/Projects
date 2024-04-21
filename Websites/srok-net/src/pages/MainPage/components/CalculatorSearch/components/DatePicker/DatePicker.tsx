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
  dates: DateRange;
  sx?: CSSProperties;
  styleWrapper?: CSSProperties;
}

registerLocale("ru", ru);
setDefaultLocale("ru");

export const DatePicker: FC<IDatePickerProps> = ({
  dates,
  sx,
  styleWrapper,
}) => {
  const dispatch = useDispatch();

  const [selectedDates, setSelectedDates] = useState<DateRange>({
    verdictDate: null,
    comesInToForse: null,
  });
  const [minDatePickerDate, setMinDatePickerDate] = useState<Date | null>(null);

  useEffect(() => {
    setSelectedDates(dates);
  }, [dates]);

  useEffect(() => {
    if (selectedDates.verdictDate) {
      const minDate = new Date(selectedDates.verdictDate);
      minDate.setDate(minDate.getDate() + 14);
      setMinDatePickerDate(minDate);
    }
  }, [selectedDates.verdictDate]);

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
        hint={true}
        hintPosition="right"
        hintText="Eсли дата приговора неизвестна, то внесите предполагаемую дату приговора"
      >
        <ReactDatePicker
          selected={selectedDates.verdictDate}
          // startDate={selectedDates.verdictDate}
          // endDate={selectedDates.comesInToForse}
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
        hint={true}
        hintPosition="right"
        hintText="Если подали апелляцию, то внесите дату из приговора, если приговора нет, то внесите предполагаемую дату"
      >
        <ReactDatePicker
          selected={selectedDates.comesInToForse}
          // startDate={selectedDates.verdictDate}
          // endDate={selectedDates.comesInToForse}
          minDate={minDatePickerDate}
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
