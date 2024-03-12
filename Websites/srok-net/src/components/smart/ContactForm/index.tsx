import React, { ChangeEvent, useState } from "react";

import { Button } from "src/components/UI/Button/Button";
import { Checkbox } from "src/components/UI/Checkbox/Checkbox";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { Radio, RadioOptions } from "src/components/UI/Radio";
import { H } from "src/components/UI/Text/H";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import LogoIcon from "src/components/icons/LogoIcon";
import { useOnFreedom } from "src/pages/OnFreedom/hooks/useOnFreedom";
import { useDispatch, useSelector } from "src/store";
import {
  updateOnFreedomModalDefaultPrice,
  updateOnFreedomModalSupportVariants,
  updateOnFreedomModalTextField,
  updateOnFreedomModalWillingToPay,
} from "src/store/slices/OnFreedomForm";
import { onFreedomModal } from "src/store/slices/OnFreedomForm/onFreedom.selectors";
import { IForms } from "src/utils/types/OnFreedom.types";
import "./ContactForm.scss";

const ContactForm = (props: IForms) => {
  const dispatch = useDispatch();
  const { acceptTerms } = useSelector(onFreedomModal);
  const { setShowModal, modalAcceptTerms } = useOnFreedom();
  const { title, inputsContent } = props;
  const [defaultPrice, setDefaultPrice] = useState("1");
  const [willingToPay, setWillingToPay] = useState("1");
  const [extraSupport, setExtraSupport] = useState("1");
  const [textContent, setTextContent] = useState("");

  const handleSubmit = () => {
    setShowModal(false);
  };

  const radio_options: RadioOptions = {
    yes: {
      value: "1",
      label: "Да",
    },
    no: {
      value: "2",
      label: "Нет",
    },
  };
  const radio_options2: RadioOptions = {
    option1: {
      value: "1",
      label: "500-1000",
    },
    option2: {
      value: "2",
      label: "1000-3000",
    },
    option3: {
      value: "3",
      label: "3000-5000",
    },
  };
  const radio_options3: RadioOptions = {
    option1: {
      value: "1",
      label: "Нет",
    },
    option2: {
      value: "2",
      label: "Консультация адвоката",
    },
    option3: {
      value: "3",
      label: "Ведение вашего дела адвокатом",
    },
    option4: {
      value: "4",
      label: "Другое",
    },
  };

  const inputModalDefaultPrice = (event: ChangeEvent<HTMLInputElement>) => {
    setDefaultPrice(event.target.value);
    dispatch(updateOnFreedomModalDefaultPrice(event.target.value));
  };
  const inputModalWillingToPay = (event: ChangeEvent<HTMLInputElement>) => {
    setWillingToPay(event.target.value);
    dispatch(updateOnFreedomModalWillingToPay(event.target.value));
  };

  const inputModalExtraSupport = (event: ChangeEvent<HTMLInputElement>) => {
    setExtraSupport(event.target.value);
    dispatch(updateOnFreedomModalSupportVariants(event.target.value));
  };

  const inputModalTextField = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextContent(event.target.value);
    dispatch(updateOnFreedomModalTextField(event.target.value));
  };

  return (
    <div className="contact-form-wrapper">
      <LogoIcon />
      <div className="contact-form-wrapper-title">
        <H variant="lg">{title}</H>
      </div>
      <div className="contact-form-content">
        {inputsContent.map((input) => {
          const { onChange, placeholder, value } = input;
          return (
            <InputContainer key={placeholder} label={placeholder} color="blue">
              <TextInput value={value} onChange={onChange} />
            </InputContainer>
          );
        })}
        <InputContainer label="Готовы купить отчет за 5000 рублей?">
          <Radio
            options={radio_options}
            onChange={inputModalDefaultPrice}
            selected={defaultPrice}
          />
          {defaultPrice === "2" && (
            <InputContainer label="Сколько вы готовы заплатить?">
              <Radio
                options={radio_options2}
                onChange={inputModalWillingToPay}
                selected={willingToPay}
              />
            </InputContainer>
          )}
        </InputContainer>
        <InputContainer label="Какая дополнительная поддержка нужна по вашему делу?">
          <Radio
            options={radio_options3}
            onChange={inputModalExtraSupport}
            selected={extraSupport}
          />
          {extraSupport === "4" && (
            <textarea name="text" onChange={inputModalTextField}>
              {textContent}
            </textarea>
            // <TextInput value={textContent} onChange={inputModalTextField} />
          )}
        </InputContainer>
      </div>
      <Checkbox
        checked={acceptTerms}
        onChange={modalAcceptTerms}
        label="Я соглашаюсь с политикой конфиденциальности персональных данных"
      />
      <div className="contact-form-button">
        <Button label="Получить отчет" color="primary" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default ContactForm;
