import React, { useState } from "react";

import { Button } from "src/components/UI/Button/Button";
import { Checkbox } from "src/components/UI/Checkbox/Checkbox";
import { DatePicker, DateRange } from "src/components/UI/DatePicker/DatePicker";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";
import { textColor } from "src/components/UI/Text/utils/types/text.types";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import AddIcon from "src/components/icons/AddIcon";
import RemoveIcon from "src/components/icons/RemoveIcon";
import "./CalculatorSearch.scss";

import { useCalculator } from "../../hooks/useCalculator";

const CalculatorSearch = ({ setResult }: any) => {
  const {
    buttonSearchProps,
    inputsentenceValue,
    chargeArticleValue,
    addChargeArticle,
    removeChargeArticle,
    setChargeArticleState,
  } = useCalculator();

  const searchSubmit = () => {
    setResult(true);
  };

  const { label, color } = buttonSearchProps;

  const [dates, setDates] = useState<DateRange>({
    verdictDate: null,
    comesInToForse: null,
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
        <div className="calculator-container-item calculator-article-value">
          {chargeArticleValue.map((article) => {
            const { id, episodesNumber, part, state } = article;
            return (
              <div key={id} className="calculator-container-article-value">
                <InputContainer
                  label="Статья"
                  color="blue"
                  styleWrapper={{ width: "90px" }}
                >
                  <TextInput
                    value={state}
                    onChange={(event) =>
                      setChargeArticleState(id, "state", event)
                    }
                  />
                </InputContainer>
                <InputContainer
                  label="Часть"
                  color="blue"
                  styleWrapper={{ width: "90px" }}
                >
                  <TextInput
                    value={part}
                    onChange={(event) =>
                      setChargeArticleState(id, "part", event)
                    }
                  />
                </InputContainer>

                <InputContainer
                  label="Кол-во эпизодов"
                  color="blue"
                  styleWrapper={{ width: "145px" }}
                >
                  <TextInput
                    value={episodesNumber}
                    onChange={(event) =>
                      setChargeArticleState(id, "episodesNumber", event)
                    }
                  />
                </InputContainer>
                <div className="calculator-container-article-value-buttons">
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
            <div className="calculator-container-article-value">
              <InputContainer
                label="Статья"
                color="disabled"
                styleWrapper={{ width: "90px" }}
              >
                <TextInput disabled={true} />
              </InputContainer>
              <InputContainer
                label="Часть"
                color="disabled"
                styleWrapper={{ width: "90px" }}
              >
                <TextInput disabled={true} />
              </InputContainer>
              <InputContainer
                label="Кол-во эпизодов"
                color="disabled"
                styleWrapper={{ width: "145px" }}
              >
                <TextInput disabled={true} />
              </InputContainer>
              <div className="calculator-container-article-value-buttons">
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
            <Checkbox label="Судимости" sx={{ color: "#0C64C5" }} />
            <Button label={label} color={color} onClick={searchSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorSearch;
