import cn from "classnames";
import React, { useState } from "react";

import DownArrow from "src/components/icons/DownArrowIcon";
import UpArrow from "src/components/icons/UpArrowIcon";
import "./Select.scss";

export type TOption<T = number | string | null> = {
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
  error?: boolean;
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
    error,
  } = props;

  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="select-container" style={{ width }} aria-label={ariaLabel}>
      <div
        className={cn("select-wrapper", {
          "select-wrapper-disabled": disabled,
          "select-wrapper-error": error,
        })}
        onClick={() => !disabled && setShowOptions(!showOptions)}
      >
        <div className="selected-option">
          {value?.label || placeholder || defaultPlaceholder}
        </div>
        <div className="select-arrow">
          {showOptions ? (
            <UpArrow />
          ) : (
            <DownArrow fill={disabled ? "#B0B0B0" : undefined} />
          )}
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
