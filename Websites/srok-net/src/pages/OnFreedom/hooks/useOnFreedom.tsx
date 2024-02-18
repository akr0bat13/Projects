import React, { useState } from "react";

import Br from "src/components/UI/Br";
import { ButtonProps } from "src/components/UI/Button/Button";
import { TOption } from "src/components/UI/Select/Select";
import { IModal } from "src/components/smart/Modal";
import {
  IForms,
  IHowItWorkContent,
  IInputFormProps,
  IInputProps,
  IInputSearchValue,
  ISearchResult,
} from "src/utils/types/OnFreedom.types";

export const useOnFreedom = () => {
  const [selectValue, setSelectValue] = useState<TOption>({
    value: "",
    label: "",
  });
  const [inputValue, setInputValue] = useState<IInputProps>({
    state: "",
    part: "",
  });

  const [inputFormValue, setInputFormValue] = useState<IInputFormProps>({
    value1: "",
    value2: "",
    value3: "",
    value4: "",
  });

  const buttonSearchProps: ButtonProps = {
    label: "Узнать",
    color: "primary",
  };
  const [showModal, setShowModal] = useState(false);

  const inputSearchValue: IInputSearchValue[] = [
    {
      value: inputValue.state,
      onChange: (event) =>
        setInputValue({ ...inputValue, state: event.target.value }),
      placeholder: "Введите статью",
    },
    {
      value: inputValue.part,
      onChange: (event) =>
        setInputValue({ ...inputValue, part: event.target.value }),
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
      title: "Какой приговор выносят в твоем городе?",
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
      title: "Какой приговор выносят в выбранном суде?",
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
      title: "Какой приговор выносят конкретный судья?",
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

  const handleClick = () => {
    console.log("selectValue", selectValue);
    setShowModal(!showModal);
  };

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
    selectValue,
    setSelectValue,
    handleClick,
    inputValue,
    showModalSettings,
    inputFormsValue,
    setShowModal,
  };
};
