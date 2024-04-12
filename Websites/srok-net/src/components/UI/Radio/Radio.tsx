import { FC } from "react";

import "./Radio.scss";

import IconWrapper from "../IconWrapper";

import type { Option, RadioOption, RadioProps } from "./utils/types/types";

function transform(obj: { [id: string]: RadioOption }): Option[] {
  return Object.entries(obj).reduce((acc: Option[], [key, value]) => {
    const obj = { id: key, ...value };
    acc.push(obj);
    return acc;
  }, []);
}

const INPUT_WIDTH = 7;

const Radio: FC<RadioProps> = (props) => (
  <div className="radio-group" style={props.sx}>
    {transform(props.options).map((option) => (
      <div key={option.id} className="radio-option">
        <IconWrapper size={INPUT_WIDTH}>
          <input
            className="radio-option-input"
            type="radio"
            id={option.id}
            value={option.value}
            checked={props.selected === option.value}
            onChange={props.onChange}
            disabled={option.disabled}
          />
        </IconWrapper>
        <label className="radio-option-label">
          {option.label ?? option.value}
        </label>
      </div>
    ))}
  </div>
);

export { Radio };
