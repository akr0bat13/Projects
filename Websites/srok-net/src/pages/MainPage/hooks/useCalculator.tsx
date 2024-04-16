import { ChangeEvent, useEffect, useState } from "react";

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

import { mockSectionActs } from "../utils/mockSectionActs";

export const useCalculator = () => {
  const dispatch = useDispatch();

  const { sentence } = useSelector(calculatorSearchValues);
  const [widthYear, setWidthYear] = useState(110);
  const [widthMonth, setWidthMonth] = useState(160);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setWidthYear(140);
        setWidthMonth(140);
      } else {
        setWidthYear(110);
        setWidthMonth(160);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

    if (
      field === "state" &&
      newState in mockSectionActs &&
      mockSectionActs[newState].length === 0
    ) {
      dispatch(
        updateChargeArticleAction({
          id,
          newState: { [field]: newState, part: "" },
        })
      );

      setChargeArticleValue((prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, [field]: newState, part: "" } : item
        )
      );
    } else {
      dispatch(
        updateChargeArticleAction({ id, newState: { [field]: newState } })
      );

      setChargeArticleValue((prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, [field]: newState } : item
        )
      );
    }
  };

  const setChargeArticleOption = (
    id: number,
    field: string,
    option: string
  ) => {
    const newState = option;

    if (
      field === "state" &&
      newState in mockSectionActs &&
      mockSectionActs[newState].length === 0
    ) {
      dispatch(
        updateChargeArticleAction({
          id,
          newState: { [field]: newState, part: "" },
        })
      );

      setChargeArticleValue((prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, [field]: newState, part: "" } : item
        )
      );
    } else {
      dispatch(
        updateChargeArticleAction({ id, newState: { [field]: newState } })
      );

      setChargeArticleValue((prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, [field]: newState } : item
        )
      );
    }
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
      width: widthYear,
      hintText:
        "Введи срок по решению суда. Если суда не было и срок неизвестен, то введите предполагаемый срок. Если срок меньше 1 года то введите 0",
    },
    {
      value: sentence.month,
      onChange: inputCalculatorSentenceMonth,
      placeholder: "Срок (месяцев)",
      color: "blue",
      width: widthMonth,
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
