import React, { ChangeEvent, useState } from "react";

import Br from "src/components/UI/Br";
import { ButtonProps } from "src/components/UI/Button/Button";
import { TOption } from "src/components/UI/Select/Select";
import { IModal } from "src/components/smart/Modal";
import { useDispatch, useSelector } from "src/store";
import {
  updateOnFreedomInputPart,
  updateOnFreedomInputState,
} from "src/store/slices/OnFreedom";
import { onFreedomInput } from "src/store/slices/OnFreedom/onFreedom.selectors";
import {
  IForms,
  IHowItWorkContent,
  IInputFormProps,
  IInputSearchValue,
  ISearchResult,
} from "src/utils/types/OnFreedom.types";

export const useOnFreedom = () => {
  const dispatch = useDispatch();

  const [inputFormValue, setInputFormValue] = useState<IInputFormProps>({
    value1: "",
    value2: "",
    value3: "",
    value4: "",
  });

  const { part, state } = useSelector(onFreedomInput);

  const buttonSearchProps: ButtonProps = {
    label: "Узнать",
    color: "primary",
  };
  const [showModal, setShowModal] = useState(false);

  const inputSearchHandlerPart = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateOnFreedomInputPart(event.target.value));
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

  const inputFormsValue: IForms = {
    title: "Введите почту и ответьте на вопросы для получения отчета",
    inputsContent: [
      {
        value: inputFormValue.value1,
        onChange: (event) =>
          setInputFormValue({ ...inputFormValue, value1: event.target.value }),
        placeholder: "Введите почту",
      },
      {
        value: inputFormValue.value2,
        onChange: (event) =>
          setInputFormValue({ ...inputFormValue, value2: event.target.value }),
        placeholder: "Вопрос 1",
      },
      {
        value: inputFormValue.value3,
        onChange: (event) =>
          setInputFormValue({ ...inputFormValue, value3: event.target.value }),
        placeholder: "Вопрос 2",
      },
      {
        value: inputFormValue.value4,
        onChange: (event) =>
          setInputFormValue({ ...inputFormValue, value4: event.target.value }),
        placeholder: "Вопрос 3",
      },
    ],
  };

  const howItWorkContent: IHowItWorkContent = {
    title: "Как это работает?",
    content: (
      <React.Fragment>
        С помощью искусственного интеллекта мы провели анализ уголовных дел из
        открытых источников. <Br />
        На основе анализа мы подготовили отчеты, которые помогают людям понять
        фактическую информацию о том, какое наказание выносится по статье
      </React.Fragment>
    ),
  };

  const searchResult: ISearchResult[] = [
    {
      title: `Какой в приговор выносят по ${state}.${part} в твоем городе?`,
      components: [
        {
          label: "Выберите город",
          color: "blue",
          isSelect: true,
        },
        {
          label: "Срок",
          color: "blue",
          disabled: true,
        },
      ],
    },
    {
      title: `Какой в приговор выносят по ${state}.${part} в выбранном суде?`,
      components: [
        {
          label: "Выберите город",
          color: "blue",
          isSelect: true,
        },
        {
          label: "Срок",
          color: "blue",
          disabled: true,
        },
      ],
      disabled: true,
    },
    {
      title: `Какой в приговор выносят по ${state}.${part} конкретный судья?`,
      components: [
        {
          label: "Выберите город",
          color: "blue",
          isSelect: true,
        },
        {
          label: "Срок",
          color: "blue",
          disabled: true,
        },
      ],
      disabled: true,
    },
  ];

  const options: TOption[] = [
    { value: "Москва", label: "Москва" },
    { value: "Питер", label: "Питер" },
    { value: "Владимир", label: "Владимир" },
    { value: "Магадан", label: "Магадан" },
  ];

  const showModalSettings: IModal = {
    active: showModal,
    setActive: setShowModal,
  };

  return {
    buttonSearchProps,
    inputSearchValue,
    howItWorkContent,
    searchResult,
    options,
    showModalSettings,
    inputFormsValue,
    setShowModal,
  };
};
