import React, { FC } from "react";

import { Button } from "src/components/UI/Button/Button";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { textColor } from "src/components/UI/Text/utils/types/text.types";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import AddIcon from "src/components/icons/AddIcon";
import RemoveIcon from "src/components/icons/RemoveIcon";

import { useCalculator } from "../../hooks/useCalculator";

const ArticleValueItem: FC = () => {
  const {
    chargeArticleValue,
    addChargeArticle,
    removeChargeArticle,
    setChargeArticleState,
    disabledComponent,
  } = useCalculator();
  return (
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
                onChange={(event) => setChargeArticleState(id, "state", event)}
              />
            </InputContainer>
            <InputContainer
              label="Часть"
              color="blue"
              styleWrapper={{ width: "90px" }}
            >
              <TextInput
                value={part}
                onChange={(event) => setChargeArticleState(id, "part", event)}
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
          {disabledComponent.map((item) => {
            const { color, disabled, label, styleWrapper } = item;
            return (
              <>
                <InputContainer
                  key={label}
                  label={label}
                  color={color as textColor}
                  styleWrapper={{ width: styleWrapper }}
                >
                  <TextInput disabled={disabled} />
                </InputContainer>
              </>
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