// import { CircularProgress } from "@mui/material";
import { FC } from "react";

import LockIcon from "src/components/icons/LockIcon";

interface InputIconsProps {
  isInfo?: boolean;
  isLock?: boolean;
  handleClickTrigger: (arg1?: "inc" | "dec" | React.MouseEvent) => void;
  infoHandler?(): void;
  showIconTestId?: string;
  infoIconTestId?: string;
  isSearch?: boolean;
  isSearchLoading?: boolean;
  isPassword?: boolean;
  isShow: boolean;
}

export const InputIcons: FC<InputIconsProps> = ({
  handleClickTrigger,
  isInfo,
  isLock,
  infoHandler,
  infoIconTestId,
  showIconTestId,
  isSearch,
  isSearchLoading,
  isPassword,
  isShow,
}) => {
  return (
    <div className="text-input-icons-wrapper">
      {isLock && (
        <button
          onClick={infoHandler}
          className="text-input-icon"
          data-testid={infoIconTestId}
        >
          <LockIcon />
        </button>
      )}
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
      */}
    </div>
  );
};
