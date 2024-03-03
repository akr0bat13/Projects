import cn from "classnames";
import React, {
  CSSProperties,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";
import "./TextInput.scss";

import { InputIcons } from "./components/InputIcons";
import { usePasswordInput } from "./hooks/usePasswordInput";

interface TextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isPassword?: boolean;
  isInfo?: boolean;
  isLock?: boolean;
  infoHandler?(): void;
  isSearch?: boolean;
  isSearchLoading?: boolean;
  showIconTestId?: string;
  infoIconTestId?: string;
  sx?: CSSProperties;
  error?: boolean;
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    isPassword,
    isInfo,
    isLock,
    infoHandler,
    isSearch,
    isSearchLoading,
    showIconTestId,
    infoIconTestId,
    sx,
    disabled,
    error,
    ...rest
  } = props;

  const { isShow, handleClickTrigger } = usePasswordInput(); //need to remove logic

  //this logic must be moved to components who it needed too
  const selectedIconHandler = (
    operation: "inc" | "dec" | React.MouseEvent | undefined
  ) => {
    return handleClickTrigger();
  };

  const isIcon = isInfo || isSearch || isPassword || isLock;
  return (
    <div
      className={cn("text-input-wrapper", {
        "text-input-wrapper-disabled": disabled,
        "text-input-wrapper-error": error,
      })}
      style={sx}
    >
      <input
        className={cn("text-input", disabled && "text-input-disabled")}
        type={isPassword ? (isShow ? "text" : "password") : "text"} //need to refactor too
        disabled={disabled}
        {...rest}
      />
      {isIcon && (
        <InputIcons
          isShow={isShow}
          handleClickTrigger={selectedIconHandler}
          infoHandler={infoHandler}
          infoIconTestId={infoIconTestId}
          isInfo={isInfo}
          isLock={isLock}
          isPassword={isPassword}
          isSearch={isSearch}
          isSearchLoading={isSearchLoading}
          showIconTestId={showIconTestId}
          disabled={disabled}
        />
      )}
    </div>
  );
};
