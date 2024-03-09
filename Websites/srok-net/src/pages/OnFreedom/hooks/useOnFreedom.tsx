// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { ChangeEvent, useState } from "react";

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
  updateOnFreedomModalPeriodic,
  updateOnFreedomModalUseInform,
} from "src/store/slices/OnFreedomForm";
import { onFreedomModal } from "src/store/slices/OnFreedomForm/onFreedom.selectors";
import {
  IForms,
  IInputSearchValue,
  ISearchResult,
} from "src/utils/types/OnFreedom.types";

export const useOnFreedom = () => {
  const dispatch = useDispatch();

  const { part, state } = useSelector(onFreedomInput);
  const { modalInputs } = useSelector(onFreedomModal);

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

  const inputModalUseInform = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateOnFreedomModalUseInform(event.target.value));
  };
  const inputModalPeriodic = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateOnFreedomModalPeriodic(event.target.value));
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
    title: "Ответьте на вопросы для получения отчета",
    inputsContent: [
      {
        value: modalInputs.useInform,
        onChange: inputModalUseInform,
        placeholder:
          "⁠Как Вы будете использовать информацию из данного отчета?",
      },
      {
        value: modalInputs.periodic,
        onChange: inputModalPeriodic,
        placeholder: "Нужно ли Вам регулярно пользоваться такими отчетами?",
      },
    ],
  };

  const searchResult: ISearchResult[] = [
    {
      title: `Какой в приговор выносят по ${state}.${part} в твоем городе?`,
      components: [
        {
          label: "Выберите город",
          isSelect: true,
        },
        {
          label: "Срок",
          disabled: true,
        },
      ],
    },
    {
      title: `Какой в приговор выносят по ${state}.${part} в выбранном суде?`,
      components: [
        {
          label: "Выберите город",
          isSelect: true,
          disabled: true,
        },
        {
          label: "Срок",
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
          isSelect: true,
          disabled: true,
        },
        {
          label: "Срок",
          disabled: true,
        },
      ],
      disabled: true,
    },
  ];

  const options: TOption[] = [
    { value: 0, label: "Москва" },
    { value: 1, label: "Питер" },
    { value: 2, label: "Владимир" },
    { value: 3, label: "Магадан" },
  ];

  const showModalSettings: IModal = {
    active: showModal,
    setActive: setShowModal,
  };

  return {
    buttonSearchProps,
    inputSearchValue,
    searchResult,
    options,
    showModalSettings,
    inputFormsValue,
    setShowModal,
  };
};
