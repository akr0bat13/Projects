import cn from "classnames";
import ru from "date-fns/locale/ru";
import React, {
  CSSProperties,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";
import ReactDatePicker, {
  registerLocale,
  setDefaultLocale,
} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";

import { useDispatch } from "src/store";
import {
  updateCalculatorComesInToForse,
  updateCalculatorVerdictDate,
} from "src/store/slices/MainPage";
import "./DatePicker.scss";

export type DateRange = {
  verdictDate: Date | null;
  comesInToForse: Date | null;
};

interface IDatePickerProps {
  onChange: (dates: DateRange) => void;
  dates: DateRange;
  sx?: CSSProperties;
}

registerLocale("ru", ru);
setDefaultLocale("ru");

export const DatePicker: FC<IDatePickerProps> = ({ onChange, dates, sx }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [selectedDates, setSelectedDates] = useState<DateRange>({
    verdictDate: null,
    comesInToForse: null,
  });

  const [isNotCurrentDate, setIsNotCurrentDate] = useState<boolean>(false);

  useEffect(() => {
    setSelectedDates(dates);
  }, [dates]);

  const inputCalculatorVerdictDate = (event: Date | null) => {
    setSelectedDates({ ...selectedDates, verdictDate: event });
    dispatch(updateCalculatorVerdictDate(event));
  };

  const inputCalculatorComesInToForse = (event: Date | null) => {
    setSelectedDates({ ...selectedDates, comesInToForse: event });
    dispatch(updateCalculatorComesInToForse(event));
  };

  const onMonthChange = useCallback(
    (displayed_date: Date) => {
      const displayed_month = displayed_date.getMonth();
      const selected_month = (
        selectedDates.verdictDate || new Date()
      ).getMonth();
      const displayed_year = displayed_date.getFullYear();
      const selected_year = (
        selectedDates.verdictDate || new Date()
      ).getFullYear();

      setIsNotCurrentDate(
        displayed_month !== selected_month || displayed_year !== selected_year
      );
    },
    [selectedDates.verdictDate]
  );

  const resetSetIsNotCurrentMonth = useCallback(
    () => setIsNotCurrentDate(false),
    []
  );
  return (
    <div className="datepicker-wrapper" style={sx}>
      <ReactDatePicker
        selected={selectedDates.verdictDate}
        startDate={selectedDates.verdictDate}
        endDate={selectedDates.comesInToForse}
        onMonthChange={onMonthChange}
        onSelect={resetSetIsNotCurrentMonth}
        onChange={inputCalculatorVerdictDate}
        placeholderText={t("Дата приговора")}
        calendarClassName={cn("date-picker", {
          "not-current-month": isNotCurrentDate,
        })}
        dateFormat="dd.MM.yyyy"
        isClearable={!!selectedDates.verdictDate}
      />
      <ReactDatePicker
        selected={selectedDates.comesInToForse}
        startDate={selectedDates.verdictDate}
        endDate={selectedDates.comesInToForse}
        minDate={selectedDates.verdictDate}
        onMonthChange={onMonthChange}
        onSelect={resetSetIsNotCurrentMonth}
        onChange={inputCalculatorComesInToForse}
        placeholderText={t("Вступает в силу")}
        calendarClassName={cn("date-picker", {
          "not-current-month": isNotCurrentDate,
        })}
        dateFormat="dd.MM.yyyy"
        className="test"
        isClearable={!!selectedDates.comesInToForse}
      />
    </div>
  );
};
