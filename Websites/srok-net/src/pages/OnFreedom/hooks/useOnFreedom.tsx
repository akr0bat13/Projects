// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { ChangeEvent, useState } from "react";

import { ButtonProps } from "src/components/UI/Button/Button";
import { RadioOptions } from "src/components/UI/Radio";
import { TOption } from "src/components/UI/Select/Select";
import { IModal } from "src/components/smart/Modal";
import { useDispatch, useSelector } from "src/store";
import {
  updateOnFreedomInputPart,
  updateOnFreedomInputState,
} from "src/store/slices/OnFreedom";
import { onFreedomInput } from "src/store/slices/OnFreedom/onFreedom.selectors";
import {
  updateOnFreedomModalAcceptTerms,
  updateOnFreedomModalContactInfo,
  updateOnFreedomModalDefaultPrice,
  updateOnFreedomModalPeriodic,
  updateOnFreedomModalSupportVariants,
  updateOnFreedomModalTextField,
  updateOnFreedomModalUseInform,
  updateOnFreedomModalWillingToPay,
} from "src/store/slices/OnFreedomForm";
import {
  onFreedomExtraSupport,
  onFreedomModal,
  onFreedomModalPrice,
} from "src/store/slices/OnFreedomForm/onFreedom.selectors";
import {
  IForms,
  IInputSearchValue,
  ISearchResult,
} from "src/utils/types/OnFreedom.types";

export const useOnFreedom = () => {
  const dispatch = useDispatch();

  const { part, state } = useSelector(onFreedomInput);
  const { modalInputs } = useSelector(onFreedomModal);
  const { defaultPrice, willingToPay } = useSelector(onFreedomModalPrice);
  const { supportVariants, textField } = useSelector(onFreedomExtraSupport);

  const [showModal, setShowModal] = useState(false);
  const [defaultPriceValue, setDefaultPriceValue] = useState(defaultPrice);
  const [willingToPayValue, setWillingToPayValue] = useState(willingToPay);
  const [extraSupport, setExtraSupport] = useState(supportVariants);
  const [textContent, setTextContent] = useState(textField);

  const inputSearchHandlerPart = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateOnFreedomInputPart(event.target.value));
  };

  const inputSearchHandlerState = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateOnFreedomInputState(event.target.value));
  };

  const inputModalUseInform = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateOnFreedomModalUseInform(event.target.value));
  };

  const inputModalContactInfo = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateOnFreedomModalContactInfo(event.target.value));
  };

  const inputModalPeriodic = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateOnFreedomModalPeriodic(event.target.value));
  };

  const modalAcceptTerms = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateOnFreedomModalAcceptTerms(event.target.checked));
  };

  const inputModalDefaultPrice = (event: ChangeEvent<HTMLInputElement>) => {
    setDefaultPriceValue(parseInt(event.target.value));
    dispatch(updateOnFreedomModalDefaultPrice(parseInt(event.target.value)));
  };
  const inputModalWillingToPay = (event: ChangeEvent<HTMLInputElement>) => {
    setWillingToPayValue(parseInt(event.target.value));
    dispatch(updateOnFreedomModalWillingToPay(parseInt(event.target.value)));
  };

  const inputModalExtraSupport = (event: ChangeEvent<HTMLInputElement>) => {
    setExtraSupport(parseInt(event.target.value));
    dispatch(updateOnFreedomModalSupportVariants(parseInt(event.target.value)));
  };

  const inputModalTextField = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextContent(event.target.value);
    dispatch(updateOnFreedomModalTextField(event.target.value));
  };

  const buttonSearchProps: ButtonProps = {
    label: "Узнать",
    color: "primary",
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
        value: modalInputs.contactInfo,
        onChange: inputModalContactInfo,
        placeholder: "Введите почту",
      },
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

  const agree_with_price: RadioOptions = {
    1: {
      value: 1,
      label: "Да",
    },
    2: {
      value: 2,
      label: "Нет",
    },
  };
  const your_price: RadioOptions = {
    1: {
      value: 1,
      label: "500-1000",
    },
    2: {
      value: 2,
      label: "1000-3000",
    },
    3: {
      value: 3,
      label: "3000-5000",
    },
  };
  const need_another_help: RadioOptions = {
    1: {
      value: 1,
      label: "Не нужна",
    },
    2: {
      value: 2,
      label: "Консультация адвоката",
    },
    3: {
      value: 3,
      label: "Ведение вашего дела адвокатом",
    },
    4: {
      value: 4,
      label: "Другое",
    },
  };

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
    modalAcceptTerms,
    defaultPriceValue,
    willingToPayValue,
    extraSupport,
    textContent,
    inputModalDefaultPrice,
    inputModalWillingToPay,
    inputModalExtraSupport,
    inputModalTextField,
    agree_with_price,
    your_price,
    need_another_help,
  };
};
