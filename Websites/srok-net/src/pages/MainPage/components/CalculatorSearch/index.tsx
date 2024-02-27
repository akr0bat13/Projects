import React, { useState } from "react";

import { Button } from "src/components/UI/Button/Button";
import { Checkbox } from "src/components/UI/Checkbox/Checkbox";
import { DatePicker, DateRange } from "src/components/UI/DatePicker/DatePicker";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import AddIcon from "src/components/icons/AddIcon";
import RemoveIcon from "src/components/icons/RemoveIcon";
import "./CalculatorSearch.scss";

import { useCalculator } from "../../hooks/useCalculator";

const CalculatorSearch = ({ setResult }: any) => {
  const {
    buttonSearchProps,
    // inputDatesValue,
    inputsentenceValue,
    chargeArticleValue,
    addChargeArticle,
    removeChargeArticle,
    setChargeArticleState,
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
            gap: 20,
          }}
        />
        <div className="calculator-container-item">
          {chargeArticleValue.map((article) => {
            const { id, episodesNumber, part, state } = article;
            return (
              <div key={id} className="calculator-container-sentence">
                <InputContainer label="Статья">
                  <TextInput
                    value={state}
                    onChange={(event) =>
                      setChargeArticleState(id, "state", event)
                    }
                  />
                </InputContainer>
                <InputContainer label="Часть">
                  <TextInput
                    value={part}
                    onChange={(event) =>
                      setChargeArticleState(id, "part", event)
                    }
                  />
                </InputContainer>

                <InputContainer label="Кол-во эпизодов">
                  <TextInput
                    value={episodesNumber}
                    onChange={(event) =>
                      setChargeArticleState(id, "episodesNumber", event)
                    }
                  />
                </InputContainer>
                <div className="calculator-container-sentence-buttons">
                  <Button
                    onClick={() => removeChargeArticle(id)}
                    icon={
                      <RemoveIcon
                        fill={
                          id === 1 && chargeArticleValue.length === 1
                            ? "#B0B0B0"
                            : undefined
                        }
                      />
                    }
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
          })}
          {chargeArticleValue.length === 1 && (
            <div className="calculator-container-sentence">
              <InputContainer label="Статья">
                <TextInput disabled={true} />
              </InputContainer>
              <InputContainer label="Часть">
                <TextInput disabled={true} />
              </InputContainer>
              <InputContainer label="Кол-во эпизодов">
                <TextInput disabled={true} />
              </InputContainer>
              <div className="calculator-container-sentence-buttons">
                <Button
                  icon={<RemoveIcon fill="#B0B0B0" />}
                  sx={{ padding: 0 }}
                />
                <Button
                  onClick={addChargeArticle}
                  icon={<AddIcon fill="#B0B0B0" />}
                  sx={{ padding: 0 }}
                />
              </div>
            </div>
          )}
        </div>
        <div className="calculator-container-item">
          <div className="calculator-container-sentence">
            {inputsentenceValue.map((date) => (
              <InputContainer key={date.placeholder} label={date.placeholder}>
                <TextInput value={date.value} onChange={date.onChange} />
              </InputContainer>
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
