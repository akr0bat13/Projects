import React, {
  CSSProperties,
  ChangeEvent,
  FC,
  useEffect,
  useState,
} from "react";

import { Button } from "src/components/UI/Button/Button";
import { TextInput } from "src/components/UI/TextInput/TextInput";
import DownArrowIcon from "src/components/icons/DownArrowIcon";
import "./AutoCompleteSelect.scss";

interface IAutoCompleteSelectProps {
  options: string[];
  placeholder?: string;
  styleWrapper?: CSSProperties;
  inputValue: string;
  setState?: (
    id: number,
    field: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  setOption?: (id: number, field: string, option: string) => void;
  id?: number;
  inputType?: string;
}

const AutoCompleteSelect: FC<IAutoCompleteSelectProps> = ({
  options,
  placeholder,
  styleWrapper,
  inputValue,
  setState,
  id,
  inputType,
  setOption,
}) => {
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [showNoResults, setShowNoResults] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // setInputValue(value);

    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    setShowNoResults(false);
    if (setState && id && inputType) {
      setState(id, inputType, event);
    }
  };

  const handleSelectOption = (option: string) => {
    if (setOption && id && inputType) {
      setOption(id, inputType, option);
    }
    setFilteredOptions([]);
    setShowNoResults(false);
    setIsOptionsVisible(false);
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
    <div className="auto-compolete-input-wrapper" style={styleWrapper}>
      <TextInput
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <div className="auto-compolete-button">
        <Button
          onClick={toggleOptionsVisibility}
          icon={<DownArrowIcon />}
          sx={{ padding: 8 }}
        />
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
