import cn from "classnames";
import React, { useState } from "react";

import DownArrow from "src/components/icons/DownArrowIcon";
import UpArrow from "src/components/icons/UpArrowIcon";
import "./Select.scss";

export type TOption<T = string> = {
  value: T;
  label: string;
};

export interface ISelectProps<T> {
  options: TOption<T>[];
  value?: TOption<T> | null;
  placeholder?: string;
  disabled?: boolean;
  width?: string;
  handleChange?(arg: TOption<T>): void;
  ariaLabel?: string;
}

const defaultPlaceholder = "-";

export function Select<T>(props: ISelectProps<T>) {
  const {
    options,
    handleChange,
    placeholder,
    value,
    disabled,
    ariaLabel,
    width,
  } = props;

  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="select-container" style={{ width }} aria-label={ariaLabel}>
      <div
        className={cn("select-wrapper", {
          "select-wrapper-disabled": disabled,
        })}
        onClick={() => !disabled && setShowOptions(!showOptions)}
      >
        <div className="selected-option">
          {value?.label || placeholder || defaultPlaceholder}
        </div>
        <div className="select-arrow">
          {showOptions ? <UpArrow /> : <DownArrow />}
        </div>
      </div>

      {showOptions && (
        <div className="select-options">
          {options.map((option, idx) => (
            <div
              key={option.label}
              className={`option ${
                option.label === value?.label ? "active-option" : ""
              }`}
              onClick={() => {
                handleChange ? handleChange(option) : void 0;
                setShowOptions(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
