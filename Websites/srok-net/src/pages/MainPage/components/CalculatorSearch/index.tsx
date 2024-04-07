import React, { FC, useEffect, useState } from "react";

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
import { calculateDisabled } from "src/utils/helpers/common/calculateDisabled";
import "./CalculatorSearch.scss";

import { useCalculator } from "../../hooks/useCalculator";
import { mockSectionActs } from "../../utils/mockSectionActs";
import ArticleValueItem from "../ArticleValueItem";

import { DatePicker, DateRange } from "./components/DatePicker/DatePicker";

interface ICalculatorSearch {
  updateLawsInfo: any;
  isLoadingLawsInfo: boolean;
}

const CalculatorSearch: FC<ICalculatorSearch> = (props) => {
  const { updateLawsInfo, isLoadingLawsInfo } = props;

  const { buttonSearchProps, inputsentenceValue, convictionHandler } =
    useCalculator();
  const { label, color } = buttonSearchProps;
  const { verdictDate, comesInToForse, sentence, chargeArticle, conviction } =
    useSelector(calculatorSearchValues);

  const [isAnyErrorFields, setIsAnyErrorFields] = useState(false);

  const fieldsWritten: boolean =
    !!verdictDate &&
    !!comesInToForse &&
    !!sentence.month &&
    !!sentence.year &&
    !isAnyErrorFields &&
    chargeArticle.every((article) => {
      const isDisabled = calculateDisabled(
        article.state,
        article.part,
        mockSectionActs
      );

      return isDisabled && article.episodesNumber !== "";
    });
  const searchSubmit = () => {
    updateLawsInfo(chargeArticle);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dates, setDates] = useState<DateRange>({
    verdictDate,
    comesInToForse,
  });

  const isPeriodCorrectType = (value: string) => {
    return validateInputNumber(value);
  };

  useEffect(() => {
    const hasError = inputsentenceValue.some(
      (date) => !isPeriodCorrectType(date.value)
    );
    setIsAnyErrorFields(hasError);
  }, [inputsentenceValue]);

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
        />

        <ArticleValueItem setIsAnyErrorFields={setIsAnyErrorFields} />

        <div className="calculator-container-item calculator-container-item-last-colunm">
          <div className="calculator-container-sentence">
            {inputsentenceValue.map((date) => (
              <InputContainer
                key={date.placeholder}
                label={date.placeholder}
                color={date.color as textColor}
                styleWrapper={{ width: date.width }}
                hint={true}
                hintText={date.hintText}
              >
                <TextInput
                  value={date.value}
                  onChange={date.onChange}
                  error={!isPeriodCorrectType(date.value)}
                />
              </InputContainer>
            ))}
          </div>
          <div className="calculator-container-buttons">
            <Checkbox
              checked={conviction}
              label="Судимости"
              onChange={convictionHandler}
              sx={{ color: "#0C64C5" }}
            />
            <Button
              label={label}
              color={color}
              onClick={searchSubmit}
              disabled={!fieldsWritten || isLoadingLawsInfo}
              sx={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorSearch;
