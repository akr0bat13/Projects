import React from "react";
import "./JusticeSearch.scss";

import { Button } from "src/components/UI/Button/Button";
import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import { useSelector } from "src/store";
import { onFreedomInput } from "src/store/slices/OnFreedom/onFreedom.selectors";

import { useOnFreedom } from "../../hooks/useOnFreedom";

const JusticeSearch = ({ setResult }: any) => {
  const { buttonSearchProps, inputSearchValue } = useOnFreedom();
  const { part, state } = useSelector(onFreedomInput);

  const searchSubmit = () => {
    if (part && state) {
      setResult(true);
    }
  };

  const { label, color } = buttonSearchProps;
  return (
    <div className="search-wrapper">
      <H variant="hd" color="white">
        Правосудие без иллюзий
      </H>
      <P variant="md" color="white">
        Узнайте какое наказание ожидать
      </P>
      <div className="search-container">
        {inputSearchValue.map((input) => (
          <TextInput
            key={input.placeholder}
            value={input.value}
            onChange={input.onChange}
            placeholder={input.placeholder}
          />
        ))}

        <Button onClick={searchSubmit} label={label} color={color} />
      </div>
    </div>
  );
};

export default JusticeSearch;
