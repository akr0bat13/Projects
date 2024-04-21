import React, { FC, useEffect } from "react";

import AutoCompleteSelect from "src/components/UI/AutoCompleteSelect";
import { Button } from "src/components/UI/Button/Button";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { textColor } from "src/components/UI/Text/utils/types/text.types";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import AddIcon from "src/components/icons/AddIcon";
import RemoveIcon from "src/components/icons/RemoveIcon";
import { mockSectionActs } from "src/utils/constants/mockSectionActs";
import { validateDate } from "src/utils/helpers/common";

import { useCalculator } from "../../hooks/useCalculator";

interface IArticleValueItem {
  setIsAnyErrorFields?: any;
}

const ArticleValueItem: FC<IArticleValueItem> = ({ setIsAnyErrorFields }) => {
  const {
    chargeArticleValue,
    addChargeArticle,
    removeChargeArticle,
    setChargeArticleState,
    disabledComponent,
    setChargeArticleOption,
  } = useCalculator();

  const getMockSectionActsKeys = () => {
    return Object.keys(mockSectionActs);
  };
  const options = getMockSectionActsKeys();

  useEffect(() => {
    const hasError = chargeArticleValue.some((article) => {
      const { state, part, episodesNumber } = article;
      const isStateError = !validateDate(state);
      const isPartError = !validateDate(part);
      const isEpisodesNumberError = !validateDate(episodesNumber);
      return isStateError && isPartError && isEpisodesNumberError;
    });
    setIsAnyErrorFields(hasError);
  }, [chargeArticleValue]);

  return (
    <div className="calculator-container-item calculator-article-value">
      {chargeArticleValue.map((article) => {
        const { id, episodesNumber, part, state } = article;
        let partOptions: string[] = [];
        if (state in mockSectionActs) {
          partOptions = mockSectionActs[state].map((value) => value.toString());
        }
        const isStateError = validateDate(state);
        const isPartError = validateDate(part);
        const isEpisodesNumberError = validateDate(episodesNumber);
        return (
          <div key={id} className="calculator-container-article-value">
            <div className="calculator-container-article-value-state">
              <InputContainer label="Статья" color="blue">
                <AutoCompleteSelect
                  options={options}
                  inputValue={state}
                  id={id}
                  setState={setChargeArticleState}
                  setOption={setChargeArticleOption}
                  inputType="state"
                  optionsStyle={{ maxHeight: 74 }}
                  error={!isStateError}
                />
              </InputContainer>
            </div>
            <div className="calculator-container-article-value-part">
              <InputContainer
                label="Часть"
                color={partOptions.length === 0 ? "disabled" : "blue"}
              >
                <AutoCompleteSelect
                  options={partOptions}
                  inputValue={part}
                  id={id}
                  setState={setChargeArticleState}
                  setOption={setChargeArticleOption}
                  inputType="part"
                  disabled={partOptions.length === 0}
                  error={!isPartError}
                />
              </InputContainer>
            </div>
            <div className="calculator-container-article-value-episodes">
              <InputContainer
                label="Эпизоды"
                color="blue"
                hint={id === 1}
                hintText="Введите количество эпизовов"
                hintPosition="left"
              >
                <TextInput
                  value={episodesNumber}
                  onChange={(event) =>
                    setChargeArticleState(id, "episodesNumber", event)
                  }
                  error={!isEpisodesNumberError}
                />
              </InputContainer>
            </div>
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
        <div className="calculator-container-article-value-disabled">
          {disabledComponent.map((item) => {
            const { color, disabled, label, className } = item;
            return (
              <div key={label} className={className}>
                <InputContainer label={label} color={color as textColor}>
                  <TextInput disabled={disabled} />
                </InputContainer>
              </div>
            );
          })}
          <div className="calculator-container-article-value-buttons">
            <Button icon={<RemoveIcon fill="#B0B0B0" />} sx={{ padding: 0 }} />
            <Button
              onClick={addChargeArticle}
              icon={<AddIcon fill="#B0B0B0" />}
              sx={{ padding: 0 }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleValueItem;
