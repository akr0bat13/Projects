import React, { useEffect } from "react";
import "./JusticeSearch.scss";

import AutoCompleteSelect from "src/components/UI/AutoCompleteSelect";
import { Button } from "src/components/UI/Button/Button";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";
import { useSelector } from "src/store";
import { onFreedomInput } from "src/store/slices/OnFreedom/onFreedom.selectors";
import { mockSectionActs } from "src/utils/constants/mockSectionActs";
import {
  validateInputActState,
  validateInputNumber,
} from "src/utils/helpers/common";
import { calculateDisabled } from "src/utils/helpers/common/calculateDisabled";
import { updateNotification } from "src/utils/helpers/updateNotification";
import { metricsForm } from "src/utils/metrics/metrics";

import { useOnFreedom } from "../../hooks/useOnFreedom";

const JusticeSearch = ({ setResult }: any) => {
  const {
    buttonSearchProps,
    inputSearchValue,
    inputSearchHandlerStateOption,
    inputSearchHandlerPartOption,
  } = useOnFreedom();
  const { part, state } = useSelector(onFreedomInput);

  const isButtonDisabled = !calculateDisabled(state, part, mockSectionActs);

  useEffect(() => {
    setResult(false);
  }, [state, part]);

  const checkPartValue = (part: string) => {
    return validateInputNumber(part);
  };

  const checkStateValue = (state: string) => {
    return validateInputActState(state);
  };

  const searchSubmit = () => {
    if (!isButtonDisabled) {
      setResult(true);
      metricsForm("reachGoal", "To know");
    }
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
          const partOptions =
            state in mockSectionActs ? mockSectionActs[state].map(String) : [];
          const isFirstInput = index === 0;
          const isFirstInputError = isFirstInput && !checkStateValue(state);
          const isPartInputError = !isFirstInput && !checkPartValue(part);
          const inputErrorLabel = isFirstInput
            ? "Статья должна быть из списка"
            : "Часть должна быть из списка";
          const inputColor = isFirstInput
            ? isFirstInputError
              ? "disabled"
              : "blue"
            : partOptions.length === 0
              ? "disabled"
              : "blue";
          switch (true) {
            case isFirstInputError:
            case isPartInputError:
              updateNotification("error", inputErrorLabel);
              break;
            default:
              break;
          }

          const inputSearchHandlerOption = isFirstInput
            ? inputSearchHandlerStateOption
            : inputSearchHandlerPartOption;
          const isButtonDisabled = isFirstInput
            ? false
            : partOptions.length === 0;
          return (
            <InputContainer
              key={input.placeholder}
              label={input.placeholder}
              color={inputColor}
            >
              <AutoCompleteSelect
                options={isFirstInput ? options : partOptions}
                inputValue={input.value}
                onChange={input.onChange}
                onOption={inputSearchHandlerOption}
                inputType="part"
                disabled={isButtonDisabled}
                error={isFirstInputError || isPartInputError}
                metric={input.metric}
              />
            </InputContainer>
          );
        })}
        <div className="search-container-button">
          <Button
            onClick={searchSubmit}
            label={label}
            color={color}
            disabled={isButtonDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default JusticeSearch;
