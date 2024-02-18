import cn from "classnames";
import React, { FC } from "react";
import "./SearchResults.scss";

import Book from "src/assets/images/book.svg";
import { Button } from "src/components/UI/Button/Button";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { Select, TOption } from "src/components/UI/Select/Select";
import { H } from "src/components/UI/Text/H";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import ContactForm from "src/components/smart/ContactForm";
import Modal from "src/components/smart/Modal";
import { ISearchResult } from "src/utils/types/OnFreedom.types";

import { useOnFreedom } from "../../hooks/useOnFreedom";

const SearchResults: FC<ISearchResult> = (component) => {
  const { title, components, disabled } = component;
  const {
    options,
    selectValue,
    setSelectValue,
    handleClick,
    showModalSettings,
    inputFormsValue,
  } = useOnFreedom();
  return (
    <>
      <div
        className={cn("search-results", {
          "search-results-disabled": disabled,
        })}
      >
        <img src={Book} alt="" />
        <div className="search-results-content">
          <H variant="lg" color="blue">
            {title}
          </H>
          <div className="search-results-inputs">
            {components.map((item) => (
              <InputContainer
                key={item.label}
                label={item.label}
                color={item.color}
              >
                {item.isSelect ? (
                  <Select
                    options={options}
                    placeholder={"Выберите город"}
                    disabled={disabled}
                    value={selectValue}
                    handleChange={(e: TOption) => setSelectValue(e)}
                  />
                ) : (
                  <TextInput isLock={true} disabled={item.disabled} />
                )}
              </InputContainer>
            ))}
          </div>
        </div>
        <div className="search-results-button">
          <Button
            label="Купить"
            color="primary"
            disabled={disabled}
            onClick={handleClick}
          />
        </div>
      </div>
      <Modal {...showModalSettings}>
        <ContactForm {...inputFormsValue} />
      </Modal>
    </>
  );
};

export default SearchResults;
