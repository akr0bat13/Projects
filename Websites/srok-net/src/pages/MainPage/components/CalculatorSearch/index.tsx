import React, { useState } from "react";

import { Button } from "src/components/UI/Button/Button";
import { Checkbox } from "src/components/UI/Checkbox/Checkbox";
import { DatePicker, DateRange } from "src/components/UI/DatePicker/DatePicker";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";
import { textColor } from "src/components/UI/Text/utils/types/text.types";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import { useSelector } from "src/store";
import { calculatorValues } from "src/store/slices/MainPage/calculator.selectors";
import "./CalculatorSearch.scss";

import { useCalculator } from "../../hooks/useCalculator";
import ArticleValueItem from "../ArticleValueItem";

const CalculatorSearch = ({ setResult }: any) => {
  const { buttonSearchProps, inputsentenceValue, convictionHandler } =
    useCalculator();

  const searchSubmit = () => {
    setResult(true);
  };

  const { label, color } = buttonSearchProps;

  const { verdictDate, comesInToForse } = useSelector(calculatorValues);

  const [dates, setDates] = useState<DateRange>({
    verdictDate,
    comesInToForse,
  });

  return (
    <div className="calculator-wrapper">
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
            gap: 10,
          }}
          styleWrapper={{ width: 190 }}
        />

        <ArticleValueItem />

        <div className="calculator-container-item">
          <div className="calculator-container-sentence">
            {inputsentenceValue.map((date) => (
              <InputContainer
                key={date.placeholder}
                label={date.placeholder}
                color={date.color as textColor}
                styleWrapper={{ width: date.width }}
              >
                <TextInput value={date.value} onChange={date.onChange} />
              </InputContainer>
            ))}
          </div>
          <div className="calculator-container-buttons">
            <Checkbox
              label="Судимости"
              onChange={convictionHandler}
              sx={{ color: "#0C64C5" }}
            />
            <Button label={label} color={color} onClick={searchSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorSearch;
