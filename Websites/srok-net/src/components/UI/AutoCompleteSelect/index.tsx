import cn from "classnames";
import React, {
  CSSProperties,
  ChangeEvent,
  FC,
  useEffect,
  useRef,
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
  optionsStyle?: CSSProperties;
  inputValue: string;
  setState?: (
    id: number,
    field: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  setOption?: (id: number, field: string, option: string) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onOption?: (option: string) => void;
  id?: number;
  inputType?: string;
  disabled?: boolean;
  error?: boolean;
}

const AutoCompleteSelect: FC<IAutoCompleteSelectProps> = ({
  options,
  placeholder,
  styleWrapper,
  inputValue,
  setState,
  id,
  inputType,
  disabled,
  error,
  setOption,
  onChange,
  onOption,
  optionsStyle,
}) => {
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [showNoResults, setShowNoResults] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    setShowNoResults(false);
    if (setState && id && inputType) {
      setState(id, inputType, event);
    }
    if (onChange) {
      onChange(event);
    }
  };

  const handleSelectOption = (option: string) => {
    if (setOption && id && inputType) {
      setOption(id, inputType, option);
    }
    if (onOption) {
      onOption(option);
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

  const textInputRef = useRef<HTMLInputElement>(null);

  const handleWrapperBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    const wrapperElement = event.currentTarget;
    const clickedElement = event.relatedTarget as HTMLElement;

    if (
      !wrapperElement.contains(clickedElement) ||
      clickedElement === wrapperElement
    ) {
      setIsOptionsVisible(false);
    }
  };

  return (
    <div
      className={cn("auto-compolete-input-wrapper", {
        "auto-compolete-input-wrapper-disabled": disabled,
      })}
      style={styleWrapper}
      onBlur={handleWrapperBlur}
      ref={textInputRef}
    >
      <TextInput
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
      />
      <div className="auto-compolete-button">
        <Button
          onClick={toggleOptionsVisibility}
          icon={<DownArrowIcon fill={disabled ? "#B0B0B0" : undefined} />}
          sx={{ padding: 0, height: "auto" }}
          disabled={disabled}
        />
      </div>
      {shouldShowOptions && (
        <div className="auto-compolete-input-options" style={optionsStyle}>
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
