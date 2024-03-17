import React from "react";
import "./JusticeSearch.scss";

import AutoCompleteSelect from "src/components/UI/AutoCompleteSelect";
import { Button } from "src/components/UI/Button/Button";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";
import { mockSectionActs } from "src/pages/MainPage/utils/mockSectionActs";
import { useSelector } from "src/store";
import { onFreedomInput } from "src/store/slices/OnFreedom/onFreedom.selectors";
import {
  validateInputActState,
  validateInputNumber,
} from "src/utils/helpers/common";

import { useOnFreedom } from "../../hooks/useOnFreedom";

const JusticeSearch = ({ setResult }: any) => {
  const {
    buttonSearchProps,
    inputSearchValue,
    inputSearchHandlerStateOption,
    inputSearchHandlerPartOption,
  } = useOnFreedom();
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
  const getMockSectionActsKeys = () => {
    return Object.keys(mockSectionActs);
  };
  const options = getMockSectionActsKeys();

  return (
    <div className="search-wrapper">
      <H variant="hd" color="white">
        Правосудие без иллюзий
      </H>
      <P variant="md" color="white">
        Узнайте какое наказание ожидать
      </P>
      <div className="search-container">
        {inputSearchValue.map((input, index) => {
          let partOptions: string[] = [];
          if (state in mockSectionActs) {
            partOptions = mockSectionActs[state].map((value) =>
              value.toString()
            );
          }
          return (
            <InputContainer
              key={input.placeholder}
              label={input.placeholder}
              color={
                index === 0
                  ? "blue"
                  : partOptions.length === 0
                    ? "disabled"
                    : "blue"
              }
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
              <AutoCompleteSelect
                options={index === 0 ? options : partOptions}
                inputValue={input.value}
                onChange={input.onChange}
                onOption={
                  index === 0
                    ? inputSearchHandlerStateOption
                    : inputSearchHandlerPartOption
                }
                inputType="part"
                disabled={index === 0 ? false : partOptions.length === 0}
              />
            </InputContainer>
          );
        })}
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
