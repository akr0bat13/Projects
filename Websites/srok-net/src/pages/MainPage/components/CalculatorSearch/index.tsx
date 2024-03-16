import React, { useState } from "react";

import { Button } from "src/components/UI/Button/Button";
import { Checkbox } from "src/components/UI/Checkbox/Checkbox";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";
import { textColor } from "src/components/UI/Text/utils/types/text.types";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import { useSelector } from "src/store";
import { calculatorSearchValues } from "src/store/slices/CalculatorSearch/calculatorSearch.selectors";
import { validateInputNumber } from "src/utils/helpers/common";
import "./CalculatorSearch.scss";

import { useCalculator } from "../../hooks/useCalculator";
import ArticleValueItem from "../ArticleValueItem";

import { DatePicker, DateRange } from "./components/DatePicker/DatePicker";

const CalculatorSearch = ({ setResult }: any) => {
  const { buttonSearchProps, inputsentenceValue, convictionHandler } =
    useCalculator();

  const { label, color } = buttonSearchProps;

  const { verdictDate, comesInToForse, sentence, chargeArticle } = useSelector(
    calculatorSearchValues
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const fieldsWritten: boolean =
    !!verdictDate &&
    !!comesInToForse &&
    !!sentence.month &&
    !!sentence.year &&
    chargeArticle.every(
      (article) =>
        article.state !== "" &&
        article.part !== "" &&
        article.episodesNumber !== ""
    );

  const searchSubmit = () => {
    setResult(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dates, setDates] = useState<DateRange>({
    verdictDate,
    comesInToForse,
  });

  const isPeriodCorrectType = (value: string) => {
    return validateInputNumber(value);
  };

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
                hint={true}
                hintText={date.hintText}
                errors={{
                  isError: !isPeriodCorrectType(date.value),
                  level: "error",
                  message: "Допустимы только цифры",
                }}
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
            <Button
              label={label}
              color={color}
              onClick={searchSubmit}
              disabled={!fieldsWritten}
              sx={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorSearch;
