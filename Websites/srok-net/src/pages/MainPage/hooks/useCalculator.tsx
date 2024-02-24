// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { ChangeEvent } from "react";

import { ButtonProps } from "src/components/UI/Button/Button";
import { useDispatch, useSelector } from "src/store";
import { calculatorValues } from "src/store/slices/MainPage/calculator.selectors";
import { updateOnFreedomInputState } from "src/store/slices/OnFreedom";
import { IInputSearchValue } from "src/utils/types/OnFreedom.types";

export const useCalculator = () => {
  const dispatch = useDispatch();

  const { verdictDate, sentence, chargeArticle, comesInToForse } =
    useSelector(calculatorValues);

  const buttonSearchProps: ButtonProps = {
    label: "Показать",
    color: "primary",
  };

  const inputSearchHandlerState = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateOnFreedomInputState(event.target.value));
  };

  const inputSearchValue: IInputSearchValue[] = [
    {
      value: state,
      onChange: inputSearchHandlerState,
      placeholder: "Введите статью",
    },
    {
      value: part,
      onChange: inputSearchHandlerPart,
      placeholder: "Введите часть",
    },
  ];

  return {
    buttonSearchProps,
    inputSearchValue,
  };
};
