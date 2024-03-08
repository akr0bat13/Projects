/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
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
import { calculatorHomeArrest } from "src/store/slices/CalculatorFiltration/calculatorFiltration.selectors";

import { useFiltrationComponent } from "../hooks/useFiltrationComponent";

const PreventiveMeasure = () => {
  const { isActive, title, values } = useSelector(calculatorHomeArrest);
  const {
    handlePreventiveMeasureChange,
    setUpdateHomeArrestValues,
    homeArrestValues,
    addHomeArrestValue,
    removeHomeArrestValue,
  } = useFiltrationComponent();

  return (
    <div className="filtration-component-item">
      <H variant="lg" color="blue">
        Мера пресечения
      </H>
      <div className="filtration-preventive-measure-item">
        <div className="filtration-preventive-title">
          <P variant="md">{title}</P>
          <SwitchToggle
            onChange={(event) => handlePreventiveMeasureChange(event)}
          />
        </div>
        {isActive && (
          <div className="select-dates">
            {homeArrestValues.map((item) => {
              const { end, id, start } = item;
              return (
                <InputContainer key={id} label="Дата приговора" color="blue">
                  <ReactDatePicker
                    selected={start}
                    startDate={start}
                    // onMonthChange={onMonthChange}
                    // onSelect={resetSetIsNotCurrentMonth}
                    onChange={(date) =>
                      setUpdateHomeArrestValues(id, "start", date)
                    }
                    placeholderText="Дата приговора"
                    calendarClassName="date-picker"
                    dateFormat="dd.MM.yyyy"
                    isClearable={!!start}
                    showIcon={!start}
                    icon={<CalendarIcon />}
                  />
                  <ReactDatePicker
                    selected={end}
                    // onMonthChange={onMonthChange}
                    // onSelect={resetSetIsNotCurrentMonth}
                    onChange={(event) =>
                      setUpdateHomeArrestValues(id, "end", event)
                    }
                    placeholderText="Дата приговора"
                    calendarClassName="date-picker"
                    dateFormat="dd.MM.yyyy"
                    isClearable={!!end}
                    showIcon={!end}
                    icon={<CalendarIcon />}
                  />
                  <div className="calculator-container-article-value-buttons">
                    <Button
                      onClick={() => removeHomeArrestValue(id)}
                      icon={
                        <RemoveIcon
                        // fill={
                        //   id === 1 && chargeArticleValue.length === 1
                        //     ? "#B0B0B0"
                        //     : undefined
                        // }
                        />
                      }
                      sx={{ padding: 0 }}
                    />
                    <Button
                      onClick={addHomeArrestValue}
                      icon={<AddIcon />}
                      sx={{ padding: 0 }}
                    />
                  </div>
                </InputContainer>
              );
            })}
          </div>
        )}
        {/* <div className="calculator-container-article-value-buttons">
          <Button
            onClick={() => removeChargeArticle(id)}
            icon={<RemoveIcon />}
            sx={{ padding: 0 }}
          />
          <Button
            onClick={addChargeArticle}
            icon={<AddIcon />}
            sx={{ padding: 0 }}
          />
        </div> */}
      </div>
      {/* {preventiveMeasure.map((item) => {
        const { title } = item;
        return (
          <div key={title} className="filtration-preventive-measure-item">
            <P variant="md">{title}</P>
            <SwitchToggle
              onChange={(event) => handlePreventiveMeasureChange(event, title)}
            />
            <TextInput
              value={part}
              onChange={(event) => setChargeArticleState(id, "part", event)}
            />
            <div className="calculator-container-article-value-buttons">
              <Button
                onClick={() => removeChargeArticle(id)}
                icon={<RemoveIcon />}
                sx={{ padding: 0 }}
              />
              <Button
                onClick={addChargeArticle}
                icon={<AddIcon />}
                sx={{ padding: 0 }}
              />
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default PreventiveMeasure;
