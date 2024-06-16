import { Dispatch, FC, useEffect, useState } from "react";

import { Button } from "src/components/UI/Button/Button";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { Radio } from "src/components/UI/Radio/Radio";
import { H } from "src/components/UI/Text/H";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import LogoIcon from "src/components/icons/LogoIcon";
import { useContactUsMutation } from "src/store/api/contactUsApi.api";
import { validateEmail, validatePhoneNumber } from "src/utils/helpers/common";
import { updateNotification } from "src/utils/helpers/updateNotification";

import { useHeadBar } from "../../hooks/useHeadBar";

import "./ContactFormModal.scss";

interface IContactUsForm {
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
}

export const ContactUsForm: FC<IContactUsForm> = ({ setShowModal }) => {
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

  const [
    contactUs,
    {
      isSuccess: contactUsSuccess,
      isLoading: isLoadingForm,
      isError: contactUsError,
    },
  ] = useContactUsMutation();

  useEffect(() => {
    if (contactUsSuccess) {
      updateNotification("success", "Сообщение успешно отправлено");
      setShowModal(false);
    }
    if (contactUsError) {
      updateNotification("error", "При отправке сообщения произошла ошибка");
    }
  }, [contactUsSuccess, contactUsError]);

  const validateUserInfo = (value: string) => {
    return validateEmail(value) || validatePhoneNumber(value);
  };

  useEffect(() => {
    const isContactInfoValid = validateUserInfo(contactInfo);
    const isTextContentValid = textContent.trim().length > 0;
    setIsButtonDisabled(!(isContactInfoValid && isTextContentValid));
  }, [contactInfo, validateUserInfo, textContent]);

  const handleSubmit = () => {
    contactUs({
      contactData: contactInfo,
      themeValue: themeChoose,
      textInput: textContent,
    });
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
            error={contactInfo !== "" && !validateUserInfo(contactInfo)}
          />
        </InputContainer>
        <InputContainer label="Выберете тему" color="blue">
          <Radio
            options={theme_choose}
            onChange={inputModalThemeChoose}
            selected={themeChoose}
          />
        </InputContainer>
        <InputContainer
          label="Опишите Вашу проблему, задайте вопрос или ваше предложение"
          color="blue"
        >
          <textarea
            className="contact-form-textarea contact-us-textarea"
            name="text"
            onChange={inputModalTextField}
          >
            {textContent}
          </textarea>
        </InputContainer>
      </div>
      <div className="contact-form-button">
        <Button
          label="Отправить"
          color="primary"
          onClick={handleSubmit}
          disabled={isButtonDisabled || isLoadingForm}
        />
      </div>
    </div>
  );
};
