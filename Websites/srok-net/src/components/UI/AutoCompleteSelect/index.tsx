import React, { FC, useEffect, useState } from "react";

import { Button } from "src/components/UI/Button/Button";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import DownArrowIcon from "src/components/icons/DownArrowIcon";
import "./AutoCompleteSelect.scss";

interface IAutoCompleteSelectProps {
  options: string[];
  onSelect: (event: any) => void;
}

const AutoCompleteSelect: FC<IAutoCompleteSelectProps> = ({
  options,
  onSelect,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [showNoResults, setShowNoResults] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    setShowNoResults(false);
  };

  const handleSelectOption = (option: string) => {
    setInputValue(option);
    onSelect(option);
    setFilteredOptions([]);
    setShowNoResults(false);
  };

  const toggleOptionsVisibility = () => {
    setIsOptionsVisible(!isOptionsVisible);
    if (inputValue === "" && !isOptionsVisible) {
      setFilteredOptions(options);
      setShowNoResults(false);
    }
  };

  useEffect(() => {
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filtered);
    setShowNoResults(filtered.length === 0);
  }, [inputValue, options]);

  const shouldShowOptions =
    inputValue.length >= 0 && filteredOptions.length >= 0 && isOptionsVisible;

  return (
    <div className="auto-compolete-input-wrapper">
      <TextInput
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите данные"
      />
      <div className="auto-compolete-button">
        <Button onClick={toggleOptionsVisibility} icon={<DownArrowIcon />} />
      </div>
      {shouldShowOptions && (
        <div className="auto-compolete-input-options">
          {showNoResults ? (
            <div className="auto-compolete-input-option">Такого нет</div>
          ) : (
            filteredOptions.map((option) => (
              <div
                className="auto-compolete-input-option"
                key={option}
                onClick={() => handleSelectOption(option)}
              >
                {option}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default AutoCompleteSelect;
