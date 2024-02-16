import React from "react";
import "./JusticeSearch.scss";

import { Button } from "src/components/UI/Button/Button";
import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";
import { TextInput } from "src/components/UI/TextInput/TextInput";

import { useOnFreedom } from "../../hooks/useOnFreedom";

const JusticeSearch = () => {
  const { buttonSearchProps, inputSearchValue } = useOnFreedom();

  const { onClick, label, color } = buttonSearchProps;
  return (
    <div className="search-wrapper">
      <H variant="hd" color="white">
        Правосудие без иллюзий
      </H>
      <P variant="lg" color="white">
        Узнайте какое наказание ожидать
      </P>
      <div className="search-container">
        {inputSearchValue.map((input) => (
          <TextInput
            key={input.id}
            value={input.value}
            onChange={input.onChange}
            placeholder={input.placeholder}
          />
        ))}

        <Button onClick={onClick} label={label} color={color} />
      </div>
    </div>
  );
};

export default JusticeSearch;
