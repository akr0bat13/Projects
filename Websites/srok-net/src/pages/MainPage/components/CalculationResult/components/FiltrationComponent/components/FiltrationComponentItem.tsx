import React, { ChangeEvent, FC } from "react";
import ReactDatePicker from "react-datepicker";

import { Button } from "src/components/UI/Button/Button";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { SwitchToggle } from "src/components/UI/SwitchToggle/SwitchToggle";
import { P } from "src/components/UI/Text/P";
import AddIcon from "src/components/icons/AddIcon";
import CalendarIcon from "src/components/icons/CalendarIcon";
import RemoveIcon from "src/components/icons/RemoveIcon";
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
}

const FiltrationComponentItem: FC<IFiltrationComponentItem> = ({
  title,
  active,
  values,
  onToggleChange,
  onValueChange,
  onRemoveValue,
  onAddValue,
}) => {
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
              <div key={id} className="select-dates-item">
                <InputContainer
                  color="blue"
                  fieldStyles={{ display: "flex", gap: 5 }}
                >
                  <ReactDatePicker
                    selected={start}
                    startDate={start}
                    onChange={(date) => onValueChange(title, id, "start", date)}
                    placeholderText="С"
                    calendarClassName="date-picker"
                    dateFormat="dd.MM.yyyy"
                    isClearable={!!start}
                    showIcon={!start}
                    icon={<CalendarIcon />}
                  />
                  <ReactDatePicker
                    selected={end}
                    onChange={(event) => onValueChange(title, id, "end", event)}
                    placeholderText="По"
                    calendarClassName="date-picker"
                    dateFormat="dd.MM.yyyy"
                    isClearable={!!end}
                    showIcon={!end}
                    icon={<CalendarIcon />}
                  />
                </InputContainer>

                <div className="calculator-container-article-value-buttons">
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
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FiltrationComponentItem;
