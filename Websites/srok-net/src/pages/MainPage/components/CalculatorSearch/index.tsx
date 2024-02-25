import React, { useState } from "react";

import { Button } from "src/components/UI/Button/Button";
import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import "./CalculatorSearch.scss";
// import { useSelector } from "src/store";
import { Checkbox } from "src/components/UI/Checkbox/Checkbox";
import { DatePicker, DateRange } from "src/components/UI/DatePicker/DatePicker";
import AddIcon from "src/components/icons/AddIcon";
import RemoveIcon from "src/components/icons/RemoveIcon";

import { useCalculator } from "../../hooks/useCalculator";

const CalculatorSearch = ({ setResult }: any) => {
  const {
    buttonSearchProps,
    // inputDatesValue,
    inputsentenceValue,
    chargeArticleValue,
  } = useCalculator();
  // const { part, state } = useSelector(onFreedomInput);

  // const searchSubmit = () => {
  //   if (part && state) {
  //     setResult(true);
  //   }
  // };

  const { label, color } = buttonSearchProps;

  const [dates, setDates] = useState<DateRange>({
    verdictDate: null,
    comesInToForse: null,
  });
  return (
    <div className="search-wrapper">
      <H variant="hd" color="white">
        Правосудие без иллюзий
      </H>
      <P variant="md" color="white">
        Узнайте какое наказание ожидать
      </P>
      <div className="calculator-container">
        <DatePicker
          dates={dates}
          onChange={setDates}
          sx={{
            gap: 30,
          }}
        />
        {/* <div className="calculator-container-item">
          {inputDatesValue.map((date) => (
            <TextInput
              key={date.placeholder}
              value={date.value}
              onChange={date.onChange}
              placeholder={date.placeholder}
            />
          ))}
        </div> */}
        <div className="calculator-container-item">
          {chargeArticleValue.map((article) => {
            const { id, episodesNumber, isActive, part, state } = article;
            return (
              <div key={id} className="calculator-container-sentence">
                <TextInput
                  value={state}
                  placeholder="Статья"
                  disabled={!isActive}
                />
                <TextInput
                  value={part}
                  placeholder="Часть"
                  disabled={!isActive}
                />
                <TextInput
                  value={episodesNumber}
                  placeholder="Кол-во эпизодов"
                  disabled={!isActive}
                />
                <div className="calculator-container-add-button">
                  {isActive ? (
                    <AddIcon />
                  ) : (
                    <RemoveIcon fill={isActive ? undefined : "#B0B0B0"} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="calculator-container-item">
          <div className="calculator-container-sentence">
            {inputsentenceValue.map((date) => (
              <TextInput
                key={date.placeholder}
                value={date.value}
                onChange={date.onChange}
                placeholder={date.placeholder}
              />
            ))}
          </div>
          <div className="calculator-container-buttons">
            <Checkbox label="Судимости" />
            <Button label={label} color={color} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorSearch;
