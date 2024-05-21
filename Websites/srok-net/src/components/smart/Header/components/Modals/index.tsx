import React from "react";

import { Button } from "src/components/UI/Button/Button";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { Radio } from "src/components/UI/Radio/Radio";
import { H } from "src/components/UI/Text/H";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import LogoIcon from "src/components/icons/LogoIcon";
import { validateEmail, validatePhoneNumber } from "src/utils/helpers/common";

import { useHeadBar } from "../../hooks/useHeadBar";
import "./ContactFormModal.scss";

const ContactUsForm = () => {
  const {
    textContent,
    theme_choose,
    inputModalThemeChoose,
    themeChoose,
    inputModalTextField,
    inputModalUserInfo,
    contactInfo,
  } = useHeadBar();

  const validateUserInfo = (value: string) => {
    return validateEmail(value) || validatePhoneNumber(value);
  };

  return (
    <div className="contact-form-wrapper">
      <LogoIcon />
      <div className="contact-form-wrapper-title">
        <H variant="lg">Остались вопросы?</H>
        <H variant="md">Заполните информацию и мы с Вами свяжемся</H>
      </div>
      <div className="contact-form-wrapper-content">
        <InputContainer label="Введите Вашу почту или телефон" color="blue">
          <TextInput
            value={contactInfo}
            onChange={inputModalUserInfo}
            error={!validateUserInfo(contactInfo)}
          />
        </InputContainer>
        <InputContainer
          label="Готовы купить отчет за 5000 рублей?"
          color="blue"
        >
          <Radio
            options={theme_choose}
            onChange={inputModalThemeChoose}
            selected={themeChoose}
          />
        </InputContainer>
        <textarea
          className="contact-form-textarea"
          name="text"
          onChange={inputModalTextField}
          placeholder="Введите Ваш запрос"
        >
          {textContent}
        </textarea>
      </div>
      <div className="contact-form-button">
        <Button
          label="Отправить"
          color="primary"
          // onClick={handleSubmit}
          // disabled={!isButtonDisabled || isLoadingForm}
        />
      </div>
    </div>
  );
};

export default ContactUsForm;
