import React, { useState } from "react";
import "./JusticeSearch.scss";

import { Button } from "src/components/UI/Button/Button";
import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";
import { TextInput } from "src/components/UI/TextInput/TextInput";

interface IInputProps {
  state: string;
  part: string;
}

const JusticeSearch = () => {
  const [inputValue, setInputValue] = useState<IInputProps>({
    state: "",
    part: "",
  });

  const searchSubmit = () => {
    console.log(inputValue);
  };

  return (
    <div className="search-wrapper">
      <H variant="hd" color="white">
        Правосудие без иллюзий
      </H>
      <P variant="lg" color="white">
        Узнайте какое наказание ожидать
      </P>
      <div className="search-container">
        <TextInput
          value={inputValue.state}
          onChange={(event) =>
            setInputValue({ ...inputValue, state: event.target.value })
          }
          placeholder="Введите статью"
        />
        <TextInput
          value={inputValue.part}
          onChange={(event) =>
            setInputValue({ ...inputValue, part: event.target.value })
          }
          placeholder="Введите часть"
        />
        <Button onClick={searchSubmit} label="Узнать" color="primary" />
      </div>
    </div>
  );
};

export default JusticeSearch;
