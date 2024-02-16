import React from "react";
import "./SearchResults.scss";

import Book from "src/assets/images/book.svg";
import { Button } from "src/components/UI/Button/Button";
import { InputContainer } from "src/components/UI/InputContainer/InputContainer";
import { Select } from "src/components/UI/Select/Select";
import { H } from "src/components/UI/Text/H";
import { TextInput } from "src/components/UI/TextInput/TextInput";

import { useOnFreedom } from "../../hooks/useOnFreedom";

const SearchResults = () => {
  const { options } = useOnFreedom();
  // const { title, components } = searchResult;
  return (
    <div className="search-results">
      <img src={Book} alt="" />
      <div className="search-results-content">
        <H variant="lg" color="blue">
          Заголовок
        </H>
        <div className="search-results-inputs">
          <InputContainer label="Выберите город" color="blue">
            <Select options={options} placeholder={"Выберите город"} />
          </InputContainer>
          <InputContainer label="Статья" color="blue">
            <TextInput isLock={true} disabled={true} />
          </InputContainer>
        </div>
      </div>
      <div className="search-results-button">
        <Button label="Купить" color="primary" />
      </div>
    </div>
  );
};

export default SearchResults;
