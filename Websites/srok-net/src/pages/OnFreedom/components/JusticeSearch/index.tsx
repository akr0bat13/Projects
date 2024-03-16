import React from "react";
import "./JusticeSearch.scss";

import { Button } from "src/components/UI/Button/Button";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import { useSelector } from "src/store";
import { onFreedomInput } from "src/store/slices/OnFreedom/onFreedom.selectors";
import {
  validateInputActState,
  validateInputNumber,
} from "src/utils/helpers/common";

import { useOnFreedom } from "../../hooks/useOnFreedom";

const JusticeSearch = ({ setResult }: any) => {
  const { buttonSearchProps, inputSearchValue } = useOnFreedom();
  const { part, state } = useSelector(onFreedomInput);

  const isButtonDisabled = part && state;

  const checkPartValue = (part: string) => {
    return validateInputNumber(part);
  };

  const checkStateValue = (state: string) => {
    return validateInputActState(state);
  };

  const searchSubmit = () => {
    if (isButtonDisabled) setResult(true);
    setResult(true);
  };

  const { label, color } = buttonSearchProps;
  return (
    <div className="search-wrapper">
      <H variant="hd" color="white">
        Правосудие без иллюзий
      </H>
      <P variant="md" color="white">
        Узнайте какое наказание ожидать
      </P>
      <div className="search-container">
        {inputSearchValue.map((input, index) => (
          <InputContainer
            key={input.placeholder}
            label={input.placeholder}
            color="blue"
            errors={{
              isError:
                index === 0 ? !checkStateValue(state) : !checkPartValue(part),
              level: "error",
              message:
                index === 0
                  ? "Укажите статью правильно"
                  : "Укажите часть правильно",
            }}
          >
            <TextInput
              value={input.value}
              onChange={input.onChange}
              error={
                index === 0 ? !checkStateValue(state) : !checkPartValue(part)
              }
            />
          </InputContainer>
        ))}
        <div className="search-container-button">
          <Button
            onClick={searchSubmit}
            label={label}
            color={color}
            disabled={!isButtonDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default JusticeSearch;
