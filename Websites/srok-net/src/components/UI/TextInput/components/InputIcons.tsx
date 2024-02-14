// import { CircularProgress } from "@mui/material";
import cn from "classnames";
import { FC } from "react";

interface InputIconsProps {
  isInfo?: boolean;
  handleClickTrigger: (arg1?: "inc" | "dec" | React.MouseEvent) => void;
  infoHandler?(): void;
  showIconTestId?: string;
  infoIconTestId?: string;
  isSearch?: boolean;
  isSearchLoading?: boolean;
  isPassword?: boolean;
  isLunField?: boolean;
  isShow: boolean;
}

export const InputIcons: FC<InputIconsProps> = ({
  handleClickTrigger,
  isInfo,
  infoHandler,
  infoIconTestId,
  showIconTestId,
  isSearch,
  isSearchLoading,
  isPassword,
  isLunField,
  isShow,
}) => {
  return (
    <div
      className={cn("text-input-icons-wrapper", {
        "text-input-icons-wrapper-column": isLunField,
      })}
    >
      {/* {isInfo && (
        <button
          onClick={infoHandler}
          className="text-input-icon"
          data-testid={infoIconTestId}
        >
          <HintIcon />
        </button>
      )}
      {isSearch &&
        (isSearchLoading ? (
          <div className="text-input-icon">
            <CircularProgress color="secondary" size={16} />
          </div>
        ) : (
          <div className="text-input-icon">
            <SearchIcon fill="#ADADB7" />
          </div>
        ))}
      {isPassword && (
        <button
          className="text-input-icon"
          onClick={handleClickTrigger}
          data-testid={showIconTestId}
        >
          {isShow ? <HideIcon /> : <ShowIcon />}
        </button>
      )}
      {isLunField && (
        <>
          <button
            className="text-input-icon"
            onClick={() => handleClickTrigger("inc")}
            data-testid={showIconTestId}
          >
            <UpArrow fill={"#ADADB7"} width={10} height={6} />
          </button>
          <button
            className="text-input-icon"
            onClick={() => handleClickTrigger("dec")}
            data-testid={showIconTestId}
          >
            <DownArrow fill={"#ADADB7"} width={10} height={6} />
          </button>
        </>
      )} */}
    </div>
  );
};
