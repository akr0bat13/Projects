import React, { useState } from "react";

import Br from "src/components/UI/Br";
import { ButtonProps } from "src/components/UI/Button/Button";

export interface IInputProps {
  state: string;
  part: string;
}

export interface IInputSearchValue {
  id: number;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export interface IHowItWorkContent {
  title: string;
  content: React.ReactNode;
}

export const useOnFreedom = () => {
  const [inputValue, setInputValue] = useState<IInputProps>({
    state: "",
    part: "",
  });

  const searchSubmit = () => {
    console.log(inputValue);
  };

  const buttonSearchProps: ButtonProps = {
    onClick: searchSubmit,
    label: "Узнать",
    color: "primary",
  };

  const inputSearchValue: IInputSearchValue[] = [
    {
      id: 1,
      value: inputValue.state,
      onChange: (event) =>
        setInputValue({ ...inputValue, state: event.target.value }),
      placeholder: "Введите статью",
    },
    {
      id: 2,
      value: inputValue.part,
      onChange: (event) =>
        setInputValue({ ...inputValue, part: event.target.value }),
      placeholder: "Введите часть",
    },
  ];

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

  return {
    buttonSearchProps,
    inputSearchValue,
    howItWorkContent,
  };
};
