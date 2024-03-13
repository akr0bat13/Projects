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
import {
  onFreedomModal,
  onFreedomModalPrice,
} from "src/store/slices/OnFreedomForm/onFreedom.selectors";
import { IForms } from "src/utils/types/OnFreedom.types";
import "./ContactForm.scss";

const ContactForm = (props: IForms) => {
  const dispatch = useDispatch();
  const { acceptTerms } = useSelector(onFreedomModal);
  const { defaultPrice, willingToPay } = useSelector(onFreedomModalPrice);
  const { setShowModal, modalAcceptTerms } = useOnFreedom();
  const { title, inputsContent } = props;
  const [defaultPriceValue, setDefaultPriceValue] = useState(defaultPrice);
  const [willingToPayValue, setWillingToPayValue] = useState(willingToPay);
  const [extraSupport, setExtraSupport] = useState(1);
  const [textContent, setTextContent] = useState("");

  const handleSubmit = () => {
    setShowModal(false);
  };

  const radio_options: RadioOptions = {
    1: {
      value: 1,
      label: "Да",
    },
    2: {
      value: 2,
      label: "Нет",
    },
  };
  const radio_options2: RadioOptions = {
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
  const radio_options3: RadioOptions = {
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
        <InputContainer
          label="Готовы купить отчет за 5000 рублей?"
          color="blue"
        >
          <Radio
            options={radio_options}
            onChange={inputModalDefaultPrice}
            selected={defaultPriceValue}
          />
          {defaultPrice === 2 && (
            <InputContainer
              label="Сколько вы готовы заплатить?"
              color="blue"
              styleWrapper={{ paddingLeft: 15, paddingTop: 10 }}
            >
              <Radio
                options={radio_options2}
                onChange={inputModalWillingToPay}
                selected={willingToPayValue}
              />
            </InputContainer>
          )}
        </InputContainer>
        <InputContainer
          label="Какая дополнительная поддержка нужна по вашему делу?"
          color="blue"
        >
          <Radio
            options={radio_options3}
            onChange={inputModalExtraSupport}
            selected={extraSupport}
          />
          {extraSupport === 4 && (
            <textarea
              className="contact-form-textarea"
              name="text"
              onChange={inputModalTextField}
              placeholder="Опишите проблему"
            >
              {textContent}
            </textarea>
          )}
        </InputContainer>
      </div>
      <div className="checkbox-modal-container">
        <Checkbox checked={acceptTerms} onChange={modalAcceptTerms} />
        <a
          className="checkbox-text"
          href="src/assets/documents/React.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Я соглашаюсь c политикой конфиденциальности обработки персональных
          данных
        </a>
      </div>
      <div className="contact-form-button">
        <Button label="Получить отчет" color="primary" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default ContactForm;
