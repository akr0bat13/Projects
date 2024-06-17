import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Br from "src/components/UI/Br";
import { ButtonProps } from "src/components/UI/Button/Button";
import { IModal } from "src/components/smart/Modal";
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
import { mockSectionActs } from "src/utils/constants/mockSectionActs";
import { IAdvertisementContent } from "src/utils/types/Advertisement.types";
import { IChargeArticleProps } from "src/utils/types/CalculatorSearch.types";

export const useCalculator = () => {
  const dispatch = useDispatch();
  const router = useNavigate();

  const { sentence } = useSelector(calculatorSearchValues);

  const [showModal, setShowModal] = useState(false);
  const [widthYear, setWidthYear] = useState(110);
  const [widthMonth, setWidthMonth] = useState(160);
  const [chargeArticleValue, setChargeArticleValue] = useState<
    IChargeArticleProps[]
  >([
    {
      id: 1,
      state: "",
      part: "",
      episodesNumber: "1",
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
      episodesNumber: "1",
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
      className: "calculator-container-article-value-state",
    },
    {
      label: "Часть",
      color: "disabled",
      styleWrapper: 90,
      disabled: true,
      className: "calculator-container-article-value-part",
    },
    {
      label: "Эпизоды",
      color: "disabled",
      styleWrapper: 145,
      disabled: true,
      className: "calculator-container-article-value-episodes",
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
      hintPosition: "top",
    },
    {
      value: sentence.month,
      onChange: inputCalculatorSentenceMonth,
      placeholder: "Срок (месяцев)",
      color: "blue",
      width: widthMonth,
      hintText:
        "Введите срок по решению суда. Если суда не было то введите предполагаемый срок. Если срок равные года, то введите 0",
      hintPosition: "left",
    },
  ];

  const showModalSettings: IModal = {
    active: showModal,
    setActive: setShowModal,
  };

  const howItWorksContent: IAdvertisementContent = {
    title: "Узнай, какой средний срок выдает конкретный судья по статье",
    text: (
      <React.Fragment>
        С помощью искусственного интеллекта мы провели анализ уголовных дел из
        открытых источников. <Br />
        На основе анализа мы подготовили отчеты, которые помогают людям понять
        фактическую информацию о том, какое наказание выносится по статье
      </React.Fragment>
    ),
    onClick: () => router("/freedom"),
  };
  const personalHelpContent: IAdvertisementContent = {
    title: "Разберем твою проблему индвидуально",
    text: (
      <React.Fragment>
        Наши эксперты на основе аналитической базы помогут индвидуально
        разобраться в вашей проблеме
      </React.Fragment>
    ),
    onClick: () => setShowModal(true),
  };

  const advertisementMainContent: IAdvertisementContent[] = [
    howItWorksContent,
    personalHelpContent,
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
    advertisementMainContent,
    setShowModal,
    showModalSettings,
  };
};
