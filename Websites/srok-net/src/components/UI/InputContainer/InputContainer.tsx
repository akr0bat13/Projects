import cn from "classnames";
import { CSSProperties, FC, ReactNode } from "react";
import "./InputContainer.scss";

import QuestionIcon from "src/components/icons/QuestionIcon";

import { P } from "../Text/P";
import { textColor } from "../Text/utils/types/text.types";
import { Tooltip } from "../Tooltip/Tooltip";

export type TError = {
  isError: boolean;
  message?: string;
  level: "error" | "warning" | "info";
};

export interface InputContainerProps {
  children: ReactNode;
  label?: string;
  fieldStyles?: CSSProperties;
  labelStyles?: CSSProperties;
  styleConteiner?: CSSProperties;
  styleWrapper?: CSSProperties;
  htmlFor?: string;
  errors?: TError;
  color?: textColor;
  hint?: boolean;
  hintText?: string;
}

export const InputContainer: FC<InputContainerProps> = ({
  children,
  label,
  fieldStyles,
  labelStyles,
  styleConteiner,
  styleWrapper,
  htmlFor,
  color,
  hint,
  hintText,
  errors,
}) => {
  return (
    <div className="input-container-wrapper" style={styleWrapper}>
      <div style={styleConteiner} className="input-container">
        {!htmlFor ? (
          <div className="input-container-title">
            <P variant="sm" color={color} sx={labelStyles}>
              {label}
            </P>
            {hint && (
              <Tooltip content={hintText} position="top" tooltipWidth={300}>
                <QuestionIcon />
              </Tooltip>
            )}
          </div>
        ) : (
          <label className="input-container-label" htmlFor={htmlFor}>
            {label}
          </label>
        )}
        <div
          className={cn({
            "input-container-field-error": errors?.isError || false,
          })}
          style={fieldStyles}
        >
          {children}
          {errors && errors.isError && (
            <div className="input-container-field-message">
              <P sx={{ color: "#FF3E3E" }} variant={"sm"}>
                {errors.message}
              </P>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
