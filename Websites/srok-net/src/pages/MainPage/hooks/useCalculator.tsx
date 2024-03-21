import { ChangeEvent, useState } from "react";

import { ButtonProps } from "src/components/UI/Button/Button";
import { useDispatch, useSelector } from "src/store";
import {
  addChargeArticleAction,
  removeChargeArticleAction,
  updateCalculatorSentenceMonth,
  updateCalculatorSentenceYear,
  updateChargeArticleAction,
  updateConviction,
} from "src/store/slices/CalculatorSearch";
import { calculatorSearchValues } from "src/store/slices/CalculatorSearch/calculatorSearch.selectors";
import { IChargeArticleProps } from "src/utils/types/CalculatorSearch.types";

export const useCalculator = () => {
  const dispatch = useDispatch();

  const { sentence } = useSelector(calculatorSearchValues);

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
    if (chargeArticleValue.length !== 1) {
      setChargeArticleValue(
        chargeArticleValue.filter((article) => article.id !== id)
      );
      dispatch(removeChargeArticleAction(id));
    }
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

  const setChargeArticleOption = (
    id: number,
    field: string,
    option: string
  ) => {
    const newState = option;

    dispatch(
      updateChargeArticleAction({ id, newState: { [field]: newState } })
    );

    setChargeArticleValue((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, [field]: newState } : item
      )
    );
  };

  const convictionHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateConviction(event.target.checked));
  };

  const disabledComponent = [
    {
      label: "Статья",
      color: "disabled",
      styleWrapper: 90,
      disabled: true,
    },
    {
      label: "Часть",
      color: "disabled",
      styleWrapper: 90,
      disabled: true,
    },
    {
      label: "Кол-во эпизодов",
      color: "disabled",
      styleWrapper: 145,
      disabled: true,
    },
  ];

  const inputsentenceValue = [
    {
      value: sentence.year,
      onChange: inputCalculatorSentenceYear,
      placeholder: "Срок (лет)",
      color: "blue",
      width: 110,
      hintText:
        "Введи срок по решению суда. Если суда не было и срок неизвестен, то введите предполагаемый срок. Если срок меньше 1 года то введите 0",
    },
    {
      value: sentence.month,
      onChange: inputCalculatorSentenceMonth,
      placeholder: "Срок (месяцев)",
      color: "blue",
      width: 160,
      hintText:
        "Введите срок по решению суда. Если суда не было то введите предполагаемый срок. Если срок равные года, то введите 0",
    },
  ];

  return {
    buttonSearchProps,
    inputsentenceValue,
    chargeArticleValue,
    addChargeArticle,
    removeChargeArticle,
    setChargeArticleState,
    disabledComponent,
    convictionHandler,
    setChargeArticleOption,
  };
};
