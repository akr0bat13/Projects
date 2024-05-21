import { useEffect, useState } from "react";

import { Button } from "src/components/UI/Button/Button";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { Radio } from "src/components/UI/Radio/Radio";
import { H } from "src/components/UI/Text/H";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import LogoIcon from "src/components/icons/LogoIcon";
import { validateEmail, validatePhoneNumber } from "src/utils/helpers/common";

import { useHeadBar } from "../../hooks/useHeadBar";

import "./ContactFormModal.scss";

export const ContactUsForm = () => {
  const {
    textContent,
    theme_choose,
    inputModalThemeChoose,
    themeChoose,
    inputModalTextField,
    inputModalUserInfo,
    contactInfo,
  } = useHeadBar();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const validateUserInfo = (value: string) => {
    return validateEmail(value) || validatePhoneNumber(value);
  };

  useEffect(() => {
    const isContactInfoValid = validateUserInfo(contactInfo);
    const isTextContentValid = textContent.trim().length > 0;
    setIsButtonDisabled(!(isContactInfoValid && isTextContentValid));
  }, [contactInfo, validateUserInfo, textContent]);

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
        <InputContainer label="Выберете тему" color="blue">
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
          placeholder="Опишите Вашу проблему, задайте вопрос или ваше предложение"
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
          disabled={isButtonDisabled}
        />
      </div>
    </div>
  );
};
