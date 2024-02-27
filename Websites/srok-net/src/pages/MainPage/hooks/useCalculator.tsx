/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { ChangeEvent, useState } from "react";

import { ButtonProps } from "src/components/UI/Button/Button";
import RemoveIcon from "src/components/icons/RemoveIcon";
import { useDispatch, useSelector } from "src/store";
import {
  addChargeArticleAction,
  removeChargeArticleAction,
  updateCalculatorSentenceMonth,
  updateCalculatorSentenceYear,
  updateChargeArticleAction,
} from "src/store/slices/MainPage";
import { calculatorValues } from "src/store/slices/MainPage/calculator.selectors";
import { IChargeArticleProps } from "src/utils/types/Calculator.types";

type ActionMap = {
  [key: string]: {
    action: ActionCreatorWithPayload<{ id: number; newState: string }, string>;
    field: string;
  };
};

export const useCalculator = () => {
  const dispatch = useDispatch();

  const { sentence } = useSelector(calculatorValues);

  const [chargeArticleValue, setChargeArticleValue] = useState<
    IChargeArticleProps[]
  >([
    {
      id: 1,
      state: "",
      part: "",
      episodesNumber: "",
    },
  ]);

  const buttonSearchProps: ButtonProps = {
    label: "Показать",
    color: "primary",
  };

  const inputCalculatorSentenceYear = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(updateCalculatorSentenceYear(event.target.value));
  };
  const inputCalculatorSentenceMonth = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(updateCalculatorSentenceMonth(event.target.value));
  };

  const removeChargeArticle = (id: number) => {
    setChargeArticleValue(
      chargeArticleValue.filter((article) => article.id !== id)
    );
    dispatch(removeChargeArticleAction(id));
  };
  const addChargeArticle = () => {
    const newArticle: IChargeArticleProps = {
      id: chargeArticleValue.length + 1,
      state: "",
      part: "",
      episodesNumber: "",
    };
    setChargeArticleValue([...chargeArticleValue, newArticle]);
    dispatch(addChargeArticleAction(newArticle));
  };

  const setChargeArticleState = (
    id: number,
    field: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newState = event.target.value;

    dispatch(
      updateChargeArticleAction({ id, newState: { [field]: newState } })
    );

    setChargeArticleValue((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, [field]: newState } : item
      )
    );
  };

  const inputsentenceValue = [
    {
      value: sentence.year,
      onChange: inputCalculatorSentenceYear,
      placeholder: "Срок (лет)",
      color: "blue",
      width: 90,
    },
    {
      value: sentence.month,
      onChange: inputCalculatorSentenceMonth,
      placeholder: "Срок (месяцев)",
      color: "blue",
      width: 150,
    },
  ];

  return {
    buttonSearchProps,
    inputsentenceValue,
    chargeArticleValue,
    addChargeArticle,
    removeChargeArticle,
    setChargeArticleState,
  };
};
