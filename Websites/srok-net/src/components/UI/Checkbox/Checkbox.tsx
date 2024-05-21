import cn from "classnames";
import React, {
  CSSProperties,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";
import "./Checkbox.scss";

export interface CheckboxProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  name?: string;
  sx?: CSSProperties;
  bgColor?: string;
  isSpin?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { name, label, sx, bgColor, checked, disabled, ...rest } = props;

  return (
    <div className="checkbox-wrapper" style={sx}>
      <label className={cn(disabled && "checkbox-disabled")}>
        <>
          <input
            type="checkbox"
            name={name}
            checked={checked}
            disabled={disabled}
            {...rest}
          />
          <div
            className={cn("checkmark", {
              "checkmark-disabled": disabled,
            })}
            // className="checkmark"
            style={{ background: !checked ? bgColor : undefined }}
          ></div>
        </>
        {label}
      </label>
    </div>
  );
};
