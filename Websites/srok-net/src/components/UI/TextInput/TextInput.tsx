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
  infoHandler?(): void;
  isSearch?: boolean;
  isSearchLoading?: boolean;
  showIconTestId?: string;
  infoIconTestId?: string;
  isLunField?: boolean;
  sx?: CSSProperties;
  valueTriggerHandler?: (type: "inc" | "dec") => void; //need to remove logic
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    isPassword,
    isInfo,
    infoHandler,
    isSearch,
    isSearchLoading,
    showIconTestId,
    infoIconTestId,
    isLunField,
    valueTriggerHandler,
    sx,
    disabled,
    ...rest
  } = props;

  const { isShow, handleClickTrigger } = usePasswordInput(); //need to remove logic

  //this logic must be moved to components who it needed too
  const selectedIconHandler = (
    operation: "inc" | "dec" | React.MouseEvent | undefined
  ) => {
    if (!isLunField) {
      return handleClickTrigger();
    } else {
      if (operation === "inc" || operation === "dec") {
        if (valueTriggerHandler) valueTriggerHandler(operation);
      }
    }
  };

  const isIcon = isInfo || isSearch || isPassword || isLunField;
  return (
    <div className="text-input-wrapper" style={sx}>
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
          isPassword={isPassword}
          isSearch={isSearch}
          isSearchLoading={isSearchLoading}
          isLunField={isLunField}
          showIconTestId={showIconTestId}
        />
      )}
    </div>
  );
};
