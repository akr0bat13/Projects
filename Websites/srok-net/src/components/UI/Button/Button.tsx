import cn from "classnames";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import "./Button.scss";

import IconWrapper from "../IconWrapper";

export type ButtonColors = "secondary" | "primary";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label?: string;
  icon?: ReactNode;
  sx?: React.CSSProperties;
  iconSizeLimiter?: number;
  color?: ButtonColors;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    icon,
    label,
    sx,
    disabled,
    iconSizeLimiter,
    color,
    className,
    ...rest
  } = props;

  return (
    <button
      className={cn("icon-button", className && className, {
        "button-disabled": disabled,
        "button-primary": color === "primary",
        "button-secondary": color === "secondary",
      })}
      style={{ ...sx }}
      {...rest}
      disabled={disabled}
      type="button"
    >
      {icon && <IconWrapper size={iconSizeLimiter ?? 22}>{icon}</IconWrapper>}
      {label && label}
    </button>
  );
};
