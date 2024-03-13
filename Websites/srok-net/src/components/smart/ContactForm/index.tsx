import React from "react";

import { Button } from "src/components/UI/Button/Button";
import { Checkbox } from "src/components/UI/Checkbox/Checkbox";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { Radio } from "src/components/UI/Radio";
import { H } from "src/components/UI/Text/H";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import LogoIcon from "src/components/icons/LogoIcon";
import { useOnFreedom } from "src/pages/OnFreedom/hooks/useOnFreedom";
import { useSelector } from "src/store";
import { onFreedomModal } from "src/store/slices/OnFreedomForm/onFreedom.selectors";
import { IForms } from "src/utils/types/OnFreedom.types";
import "./ContactForm.scss";

const ContactForm = (props: IForms) => {
  const { acceptTerms } = useSelector(onFreedomModal);
  const {
    setShowModal,
    modalAcceptTerms,
    inputModalDefaultPrice,
    agree_with_price,
    defaultPriceValue,
    extraSupport,
    need_another_help,
    your_price,
    willingToPayValue,
    inputModalWillingToPay,
    inputModalExtraSupport,
    inputModalTextField,
    textContent,
  } = useOnFreedom();
  const { title, inputsContent } = props;

  const handleSubmit = () => {
    setShowModal(false);
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
            options={agree_with_price}
            onChange={inputModalDefaultPrice}
            selected={defaultPriceValue}
          />
          {defaultPriceValue === 2 && (
            <InputContainer
              label="Сколько вы готовы заплатить?"
              color="blue"
              styleWrapper={{ paddingLeft: 15, paddingTop: 10 }}
            >
              <Radio
                options={your_price}
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
            options={need_another_help}
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
