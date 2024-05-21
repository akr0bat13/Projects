import cn from "classnames";
import { FC, useState } from "react";
import "./Substrate.scss";

import { Button } from "src/components/UI/Button/Button";
import DownArrowIcon from "src/components/icons/DownArrowIcon";
import UpArrowIcon from "src/components/icons/UpArrowIcon";

import { ISubstrate } from "./utils/types/Substrate.typings";

const Substrate: FC<ISubstrate> = (props) => {
  const {
    children,
    isFillH = true,
    isRound = false,
    dropdown,
    sx,
    sxRoot,
  } = props;
  const {
    defaultDropDownValue,
    isActive,
    dropdownHandler,
    label: dropdownLabel,
    sx: dropdownSx,
    children: dropDownChildren,
    isBackgroundTransparent = false,
  } = dropdown ?? {};

  const [isDropDownOpened, setIsDropDownOpened] =
    useState(!!defaultDropDownValue);

  const isDropdown = !!dropdown;
  const isActiveDropdown = isActive !== undefined ? isActive : isDropDownOpened;
  const isDropdownChildren = !!dropDownChildren;
  const isSubstrateContent = isDropdown ? !!isActiveDropdown : true;

  const dropDownToggleHandler = () => {
    if (!dropdownHandler) {
      setIsDropDownOpened(!isDropDownOpened);
      return;
    }
    dropdownHandler(!isActiveDropdown);
  };

  return (
    <div
      className={cn("substrate-root", {
        "substrate-fill-height": isFillH && isSubstrateContent,
      })}
      style={sxRoot}
    >
      {isDropdown && (
        <div
          className={cn("substrate-dropdown", {
            "substrate-background": !isBackgroundTransparent,
          })}
          style={dropdownSx}
        >
          {isDropdownChildren ? (
            dropDownChildren
          ) : (
            <Button
              label={dropdownLabel}
              onClick={dropDownToggleHandler}
              icon={isActiveDropdown ? <DownArrowIcon /> : <UpArrowIcon />}
              style={sx}
            ></Button>
          )}
        </div>
      )}
      {isSubstrateContent && (
        <div
          className={cn("substrate-content", {
            "substrate-fill-height": isFillH,
            "substrate-round": isRound,
          })}
          style={sx}
        >
          <div className="substrate-child">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Substrate;
