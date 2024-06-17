import React, { ChangeEvent, useEffect, useState } from "react";

import Br from "src/components/UI/Br";
import { ButtonProps } from "src/components/UI/Button/Button";
import { RadioOptions } from "src/components/UI/Radio";
import { IModal } from "src/components/smart/Modal";
import { useDispatch, useSelector } from "src/store";
import {
  updateOnFreedomInputPart,
  updateOnFreedomInputState,
} from "src/store/slices/OnFreedom";
import { onFreedomInput } from "src/store/slices/OnFreedom/onFreedom.selectors";
import {
  updateOnFreedomModalContactInfo,
  updateOnFreedomModalDefaultPrice,
  updateOnFreedomModalPeriodic,
  updateOnFreedomModalSupportVariants,
  updateOnFreedomModalTextField,
  updateOnFreedomModalUseInform,
  updateOnFreedomModalWillingToPay,
} from "src/store/slices/OnFreedomForm";
import { onFreedomModal } from "src/store/slices/OnFreedomForm/onFreedom.selectors";
import { mockSectionActs } from "src/utils/constants/mockSectionActs";
import { IAdvertisementContent } from "src/utils/types/Advertisement.types";
import {
  IForms,
  IInputSearchValue,
  ISearchResult,
} from "src/utils/types/OnFreedom.types";

export const useOnFreedom = () => {
  const dispatch = useDispatch();

  const { part, state } = useSelector(onFreedomInput);
  const { modalInputs, extraSupport, valuablePrice } =
    useSelector(onFreedomModal);

  const modalInfo = useSelector(onFreedomModal);

  const [showModal, setShowModal] = useState(false);
  const [defaultPriceValue, setDefaultPriceValue] = useState(
    valuablePrice.defaultPrice
  );
  const [willingToPayValue, setWillingToPayValue] = useState(
    valuablePrice.willingToPay
  );
  const [extraSupportValue, setExtraSupportValue] = useState(
    extraSupport.supportVariants
  );
  const [textContent, setTextContent] = useState(extraSupport.textField);

  useEffect(() => {
    setDefaultPriceValue(valuablePrice.defaultPrice);
    setWillingToPayValue(valuablePrice.willingToPay);
    setExtraSupportValue(extraSupport.supportVariants);
    setTextContent(extraSupport.textField);
  }, [modalInfo]);

  const inputSearchHandlerPart = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateOnFreedomInputPart(event.target.value));
  };

  const inputSearchHandlerPartOption = (event: string) => {
    dispatch(updateOnFreedomInputPart(event));
  };

  const inputSearchHandlerState = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateOnFreedomInputState(event.target.value));
    if (mockSectionActs[event.target.value]?.length === 0) {
      dispatch(updateOnFreedomInputPart(""));
    }
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

  const buttonSearchProps: ButtonProps = {
    label: "Узнать",
    color: "primary",
  };

  const inputSearchValue: IInputSearchValue[] = [
    {
      value: state,
      onChange: inputSearchHandlerState,
      placeholder: "Введите статью",
      metric: "State",
    },
    {
      value: part,
      onChange: inputSearchHandlerPart,
      placeholder: "Введите часть",
      metric: "Part",
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
  };

  return {
    buttonSearchProps,
    inputSearchValue,
    searchResult,
    showModalSettings,
    inputFormsValue,
    setShowModal,
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
    inputSearchHandlerPartOption,
    inputSearchHandlerStateOption,
    howItWorksContent,
  };
};
