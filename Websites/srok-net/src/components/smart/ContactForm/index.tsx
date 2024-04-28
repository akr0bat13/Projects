import React, { FC, useEffect, useState } from "react";

import { Button } from "src/components/UI/Button/Button";
import { Checkbox } from "src/components/UI/Checkbox/Checkbox";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { Radio } from "src/components/UI/Radio";
import { H } from "src/components/UI/Text/H";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import LogoIcon from "src/components/icons/LogoIcon";
import { useOnFreedom } from "src/pages/OnFreedom/hooks/useOnFreedom";
import { useSelector } from "src/store";
import {
  useContactFormInfoMutation,
  useContactFormSendMailMutation,
} from "src/store/api/onFreedomApi.api.";
import { onFreedomInput } from "src/store/slices/OnFreedom/onFreedom.selectors";
import { onFreedomModal } from "src/store/slices/OnFreedomForm/onFreedom.selectors";
import { validateEmail } from "src/utils/helpers/common";
import { updateNotification } from "src/utils/helpers/updateNotification";
import { IInputFormsValue } from "src/utils/types/OnFreedom.types";
import "./ContactForm.scss";

interface IContactForm {
  setShowModal: any;
  title: string;
  inputsContent: IInputFormsValue[];
}

const ContactForm: FC<IContactForm> = (props) => {
  const {
    inputModalDefaultPrice,
    agree_with_price,
    defaultPriceValue,
    extraSupportValue,
    need_another_help,
    your_price,
    willingToPayValue,
    inputModalWillingToPay,
    inputModalExtraSupport,
    inputModalTextField,
    textContent,
  } = useOnFreedom();
  const { title, inputsContent, setShowModal } = props;
  const { modalInputs, extraSupport, valuablePrice } =
    useSelector(onFreedomModal);
  const modalInfo = useSelector(onFreedomModal);
  const laws = useSelector(onFreedomInput);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const contactInfo = modalInputs.contactInfo;

  const [
    contactFormInfo,
    {
      isSuccess: contactFormInfoSuccess,
      isLoading: isLoadingForm,
      isError: contactFormInfoError,
    },
  ] = useContactFormInfoMutation();

  const [
    contactFormSendMail,
    { isSuccess: contactFormSendSuccess, isError: contactFormSendError },
  ] = useContactFormSendMailMutation();

  useEffect(() => {
    if (contactFormInfoSuccess) {
      contactFormSendMail({
        email: modalInputs.contactInfo,
      });
      setShowModal(false);
    }
    if (contactFormInfoError) {
      updateNotification("error", "Ошибка при создании отчёта");
      setShowModal(false);
    }
  }, [contactFormInfoSuccess, contactFormInfoError]);

  useEffect(() => {
    if (contactFormSendSuccess) {
      updateNotification("success", "Письмо успешно отправлено");
    }
    if (contactFormSendError) {
      updateNotification("error", "Ошибка отправки письма на почту");
    }
  }, [contactFormSendSuccess, contactFormSendError]);

  const getReportMetric = "ym(97021647,'reachGoal','Get Report')";

  const handleSubmit = () => {
    contactFormInfo({ modalInfo, laws });
    getReportMetric;
  };

  const modalAcceptTerms = () => {
    setAcceptTerms(!acceptTerms);
  };

  const validateEmailError = (value: string) => {
    return validateEmail(value);
  };

  const isButtonDisabled =
    acceptTerms &&
    modalInputs.contactInfo &&
    modalInputs.periodic &&
    modalInputs.useInform &&
    valuablePrice.defaultPrice !== 0 &&
    extraSupport.supportVariants !== 0 &&
    validateEmail(modalInputs.contactInfo);

  return (
    <div className="contact-form-wrapper">
      <LogoIcon />
      <div className="contact-form-wrapper-title">
        <H variant="lg">{title}</H>
      </div>
      <div className="contact-form-content">
        {inputsContent.map((input, index) => {
          const { onChange, placeholder, value } = input;
          return (
            <InputContainer
              key={index}
              label={placeholder}
              color="blue"
              errors={
                index === 0
                  ? {
                      isError:
                        contactInfo !== ""
                          ? !validateEmailError(contactInfo)
                          : false,
                      level: "error",
                      message: "Введите почту корректно",
                    }
                  : {
                      isError: false,
                      level: "error",
                      message: "Введите почту корректно",
                    }
              }
            >
              <TextInput
                value={value}
                onChange={onChange}
                error={
                  index === 0
                    ? contactInfo !== ""
                      ? !validateEmailError(contactInfo)
                      : false
                    : false
                }
              />
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
            selected={extraSupportValue}
          />
          {extraSupportValue === 3 && (
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
          href="/PersonalData.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Я соглашаюсь c политикой конфиденциальности обработки персональных
          данных
        </a>
      </div>
      <div className="contact-form-button">
        <Button
          label="Получить отчет"
          color="primary"
          onClick={handleSubmit}
          disabled={!isButtonDisabled || isLoadingForm}
        />
      </div>
    </div>
  );
};

export default ContactForm;
