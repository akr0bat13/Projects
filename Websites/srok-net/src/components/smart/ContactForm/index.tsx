import React from "react";

import { Button } from "src/components/UI/Button/Button";
import { Checkbox } from "src/components/UI/Checkbox/Checkbox";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { H } from "src/components/UI/Text/H";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import LogoIcon from "src/components/icons/LogoIcon";
import { useOnFreedom } from "src/pages/OnFreedom/hooks/useOnFreedom";
import { IForms } from "src/utils/types/OnFreedom.types";
import "./ContactForm.scss";

const ContactForm = (props: IForms) => {
  const { setShowModal } = useOnFreedom();
  const { title, inputsContent } = props;

  const handleSubmit = () => {
    setShowModal(false);
  };

  // const radio_options: RadioOptions = {
  //   yes: {
  //     value: "Да",
  //     label: "Да",
  //   },
  //   no: {
  //     value: "Нет",
  //     label: "Нет",
  //   },
  // };
  // const radio_options2: RadioOptions = {
  //   option1: {
  //     value: "500-1000",
  //     label: "500-1000",
  //   },
  //   option2: {
  //     value: "1000-3000",
  //     label: "1000-3000",
  //   },
  //   option3: {
  //     value: "3000-5000",
  //     label: "3000-5000",
  //   },
  // };

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
        {/* <InputContainer label="Готовы купить отчет за 5000 рублей?">
          <Radio
            options={radio_options}
            onChange={ChangeType}
            selected={type.defaultPrice}
          />
          {type.defaultPrice === "Нет" && (
            <InputContainer label="Сколько вы готовы заплатить?">
              <Radio
                options={radio_options2}
                onChange={ChangeType}
                selected={type.willingToPay}
              />
            </InputContainer>
          )}
        </InputContainer> */}
      </div>
      <Checkbox label="Я соглашаюсь с политикой конфиденциальности персональных данных" />
      <div className="contact-form-button">
        <Button label="Получить отчет" color="primary" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default ContactForm;
