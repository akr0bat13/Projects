import { parse, subDays, toDate } from "date-fns";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useSelector } from "react-redux";

import { Button } from "src/components/UI/Button/Button";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { SwitchToggle } from "src/components/UI/SwitchToggle/SwitchToggle";
import { P } from "src/components/UI/Text/P";
import AddIcon from "src/components/icons/AddIcon";
import CalendarIcon from "src/components/icons/CalendarIcon";
import RemoveIcon from "src/components/icons/RemoveIcon";
import { calculatorSearchValues } from "src/store/slices/CalculatorSearch/calculatorSearch.selectors";
import { IFiltrationDate } from "src/utils/types/CalculatorFiltration.types";

interface IFiltrationComponentItem {
  title: string;
  active: boolean;
  values: IFiltrationDate[];
  onToggleChange: (event: ChangeEvent<HTMLInputElement>, title: string) => void;
  onValueChange: (
    title: string,
    id: number,
    field: string,
    date: Date | null
  ) => void;
  onRemoveValue: (id: number, title: string) => void;
  onAddValue: (title: string) => void;
  error: boolean;
}

const FiltrationComponentItem: FC<IFiltrationComponentItem> = ({
  title,
  active,
  values,
  onToggleChange,
  onValueChange,
  onRemoveValue,
  onAddValue,
  error,
}) => {
  const { verdictDate } = useSelector(calculatorSearchValues);
  const [maxDatePickerDate, setMaxDatePickerDate] = useState<Date | null>(null);
  const [minDatePickerDate, setMinDatePickerDate] = useState<Date | null>(null);

  useEffect(() => {
    if (verdictDate !== null) {
      const formattedDate = parse(`${verdictDate}`, "dd.MM.yyyy", new Date());
      const maxDate = toDate(formattedDate);
      const minDate = subDays(formattedDate, 1);
      setMaxDatePickerDate(maxDate);
      setMinDatePickerDate(minDate);
    }
  }, [verdictDate]);

  // const [isDateOverlap, setIsDateOverlap] = useState(false);

  // useEffect(() => {
  //   const checkDateOverlap = () => {
  //     for (let i = 0; i < values.length; i++) {
  //       const start1 = values[i].start;
  //       const end1 = values[i].end;

  //       if (start1 === null || end1 === null) {
  //         break;
  //       }
  //       for (let j = i + 1; j < values.length; j++) {
  //         const start2 = values[j].start;
  //         const end2 = values[j].end;

  //         if (start2 === null || end2 === null) {
  //           break;
  //         }

  //         if (start1 <= end2 && end1 >= start2) {
  //           setIsDateOverlap(true);
  //           return;
  //         }
  //       }
  //     }
  //     setIsDateOverlap(false);
  //   };

  //   checkDateOverlap();
  // }, [values]);

  return (
    <div className="filtration-preventive-measure-item">
      <div className="filtration-preventive-title">
        <P variant="md">{title}</P>
        <SwitchToggle onChange={(event) => onToggleChange(event, title)} />
      </div>
      {active && (
        <div className="select-dates">
          {values.map((item) => {
            const { end, id, start } = item;
            return (
              <InputContainer
                key={id}
                color="blue"
                // fieldStyles={{ display: "flex", gap: 5 }}
                errors={{
                  isError: error,
                  level: "error",
                  message: "Периоды не должны пересекаться",
                }}
              >
                <div className="select-dates-content">
                  <div className="select-dates-calendar">
                    <ReactDatePicker
                      selected={start}
                      onChange={(date) =>
                        onValueChange(title, id, "start", date)
                      }
                      placeholderText="С"
                      maxDate={minDatePickerDate}
                      calendarClassName="date-picker"
                      dateFormat="dd.MM.yyyy"
                      isClearable={!!start}
                      showIcon={!start}
                      icon={<CalendarIcon />}
                    />
                    <ReactDatePicker
                      selected={end}
                      onChange={(event) =>
                        onValueChange(title, id, "end", event)
                      }
                      placeholderText="По"
                      maxDate={maxDatePickerDate}
                      calendarClassName="date-picker"
                      dateFormat="dd.MM.yyyy"
                      isClearable={!!end}
                      showIcon={!end}
                      icon={<CalendarIcon />}
                    />
                  </div>

                  <div className="calculator-container-select-dates-buttons">
                    <Button
                      onClick={() => onRemoveValue(id, title)}
                      icon={
                        <RemoveIcon
                          fill={
                            id === 1 && values.length === 1
                              ? "#B0B0B0"
                              : undefined
                          }
                        />
                      }
                      sx={{ padding: 0 }}
                    />
                    <Button
                      onClick={() => onAddValue(title)}
                      icon={<AddIcon />}
                      sx={{ padding: 0 }}
                    />
                  </div>
                </div>
              </InputContainer>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FiltrationComponentItem;
