import React from "react";

import { Button } from "src/components/UI/Button/Button";
import { Checkbox } from "src/components/UI/Checkbox/Checkbox";
import { H } from "src/components/UI/Text/H";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import LogoIcon from "src/components/icons/LogoIcon";
import { IForms } from "src/pages/OnFreedom/hooks/useOnFreedom";
import "./ContactForm.scss";

const ContactForm = (props: IForms) => {
  const { title, inputsContent } = props;
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
            <TextInput
              key={placeholder}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          );
        })}
      </div>
      <Checkbox label="Я соглашаюсь с политикой конфиденциальности персональных данных" />
      <div className="contact-form-button">
        <Button label="Получить отчет" color="primary" />
      </div>
    </div>
  );
};

export default ContactForm;
