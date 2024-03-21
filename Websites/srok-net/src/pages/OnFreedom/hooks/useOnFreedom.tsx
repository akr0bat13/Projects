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
import { onFreedomModal } from "src/store/slices/OnFreedomForm/onFreedom.selectors";
import { validateEmail } from "src/utils/helpers/common";
import {
  IForms,
  IInputSearchValue,
  ISearchResult,
} from "src/utils/types/OnFreedom.types";

export const useOnFreedom = () => {
  const dispatch = useDispatch();

  const { part, state } = useSelector(onFreedomInput);
  const { modalInputs, acceptTerms, extraSupport, valuablePrice } =
    useSelector(onFreedomModal);

  const [showModal, setShowModal] = useState(false);
  const [defaultPriceValue, setDefaultPriceValue] = useState(
    valuablePrice.defaultPrice
  );
  const [willingToPayValue, setWillingToPayValue] = useState(
    valuablePrice.willingToPay
  );
  const [acceptTermsValue, setAcceptTermsValue] = useState(acceptTerms);
  const [extraSupportValue, setExtraSupportValue] = useState(
    extraSupport.supportVariants
  );
  const [textContent, setTextContent] = useState(extraSupport.textField);

  const inputSearchHandlerPart = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateOnFreedomInputPart(event.target.value));
  };

  const inputSearchHandlerPartOption = (event: string) => {
    dispatch(updateOnFreedomInputPart(event));
  };

  const inputSearchHandlerState = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateOnFreedomInputState(event.target.value));
  };

  const inputSearchHandlerStateOption = (event: string) => {
    dispatch(updateOnFreedomInputState(event));
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
    setAcceptTermsValue(event.target.checked);
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
    setExtraSupportValue(parseInt(event.target.value));
    dispatch(updateOnFreedomModalSupportVariants(parseInt(event.target.value)));
  };

  const inputModalTextField = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextContent(event.target.value);
    dispatch(updateOnFreedomModalTextField(event.target.value));
  };

  const validateEmailError = (value: string) => {
    return validateEmail(value);
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
        error: {
          isError: !validateEmailError,
          level: "error",
        },
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
      title: `Какой в приговор выносят по статье ${state} ${part ? `части ${part}` : ""} в твоем городе?`,
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
      title: `Какой в приговор выносят по статье ${state} ${part ? `части ${part}` : ""} в выбранном суде?`,
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
      title: `Какой в приговор выносят по статье ${state} ${part ? `части ${part}` : ""} конкретный судья?`,
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
    agree_with_price1: {
      value: 1,
      label: "Да",
    },
    agree_with_price2: {
      value: 2,
      label: "Нет",
    },
  };
  const your_price: RadioOptions = {
    your_price1: {
      value: 1,
      label: "500-1000",
    },
    your_price2: {
      value: 2,
      label: "1000-3000",
    },
    your_price3: {
      value: 3,
      label: "3000-5000",
    },
  };
  const need_another_help: RadioOptions = {
    need_another_help1: {
      value: 1,
      label: "Консультация адвоката",
    },
    need_another_help2: {
      value: 2,
      label: "Ведение вашего дела адвокатом",
    },
    need_another_help3: {
      value: 3,
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
    textContent,
    inputModalDefaultPrice,
    inputModalWillingToPay,
    inputModalExtraSupport,
    inputModalTextField,
    agree_with_price,
    your_price,
    need_another_help,
    extraSupportValue,
    acceptTermsValue,
    inputSearchHandlerPartOption,
    inputSearchHandlerStateOption,
  };
};
