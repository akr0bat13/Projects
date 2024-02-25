/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { ChangeEvent, useState } from "react";

import { ButtonProps } from "src/components/UI/Button/Button";
import AddIcon from "src/components/icons/AddIcon";
import RemoveIcon from "src/components/icons/RemoveIcon";
import { useDispatch, useSelector } from "src/store";
import {
  addChargeArticleAction,
  removeChargeArticleAction,
  updateCalculatorComesInToForse,
  updateCalculatorSentenceMonth,
  updateCalculatorSentenceYear,
  updateCalculatorVerdictDate,
} from "src/store/slices/MainPage";
import { calculatorValues } from "src/store/slices/MainPage/calculator.selectors";
import { IChargeArticleProps } from "src/utils/types/Calculator.types";

export const useCalculator = () => {
  const dispatch = useDispatch();

  const { sentence } = useSelector(calculatorValues);

  const [chargeArticleValue, setChargeArticleValue] = useState<
    IChargeArticleProps[]
  >([
    {
      id: 1,
      part: "",
      state: "",
      episodesNumber: 0,
      icon: <AddIcon />,
    },
  ]);

  const buttonSearchProps: ButtonProps = {
    label: "Показать",
    color: "primary",
  };

  // const inputCalculatorVerdictDate = (event: ChangeEvent<HTMLInputElement>) => {
  //   dispatch(updateCalculatorVerdictDate(event.target.value));
  // };

  // const inputCalculatorComesInToForse = (
  //   event: ChangeEvent<HTMLInputElement>
  // ) => {
  //   dispatch(updateCalculatorComesInToForse(event.target.value));
  // };

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

  // const inputCalculatorChargeArticle =
  //   (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
  //     const updatedChargeArticle = [...chargeArticle];
  //     updatedChargeArticle[index] = {
  //       ...updatedChargeArticle[index],
  //       [event.target.name]: event.target.value,
  //     };
  //     dispatch(
  //       updateChargeArticle({
  //         index,
  //         chargeArticle: updatedChargeArticle[index],
  //       })
  //     );
  //   };

  // const inputDatesValue = [
  // {
  //   value: verdictDate,
  //   onChange: inputCalculatorVerdictDate,
  //   placeholder: "Дата приговора",
  // },
  // {
  //   value: comesInToForse,
  //   onChange: inputCalculatorComesInToForse,
  //   placeholder: "Вступает в силу",
  // },
  // {
  //   value: sentence.year,
  //   onChange: inputCalculatorSentenceYear,
  //   placeholder: "Год",
  // },
  // {
  //   value: sentence.month,
  //   onChange: inputCalculatorSentenceMonth,
  //   placeholder: "Месяц",
  // },
  // ...chargeArticle.map((item, index) => ({
  //   value: item.state,
  //   onChange: inputCalculatorChargeArticle(index),
  //   name: "state",
  //   placeholder: "Состояние",
  // })),
  // ...chargeArticle.map((item, index) => ({
  //   value: item.part,
  //   onChange: inputCalculatorChargeArticle(index),
  //   name: "part",
  //   placeholder: "Часть",
  // })),
  // ...chargeArticle.map((item, index) => ({
  //   value: item.episodesNumber,
  //   onChange: inputCalculatorChargeArticle(index),
  //   name: "episodesNumber",
  //   placeholder: "Количество эпизодов",
  // })),
  // ];

  const removeChargeArticle = (id: number) => {
    setChargeArticleValue(
      chargeArticleValue.filter((article) => article.id !== id)
    );
    dispatch(removeChargeArticleAction(id));
  };
  const addChargeArticle = () => {
    const newArticle: IChargeArticleProps = {
      id: chargeArticleValue.length + 1,
      part: "",
      state: "",
      episodesNumber: 0,
      icon: <RemoveIcon />,
    };
    setChargeArticleValue([...chargeArticleValue, newArticle]);
    dispatch(addChargeArticleAction(newArticle));
  };

  const inputsentenceValue = [
    {
      value: sentence.year,
      onChange: inputCalculatorSentenceYear,
      placeholder: "Срок (лет)",
    },
    {
      value: sentence.month,
      onChange: inputCalculatorSentenceMonth,
      placeholder: "Срок (месяцев)",
    },
  ];

  return {
    buttonSearchProps,
    inputsentenceValue,
    chargeArticleValue,
    addChargeArticle,
    removeChargeArticle,
  };
};
