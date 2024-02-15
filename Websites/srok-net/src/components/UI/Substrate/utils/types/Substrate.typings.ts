import {
  CSSProperties,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface ISubstrateDropdown {
  defaultDropDownValue?: boolean;
  isActive?: boolean;
  dropdownHandler?: (arg: boolean) => void;
  label?: string;
  children?: ReactNode;
  sx?: CSSProperties;
  isBackgroundTransparent?: boolean;
}

export interface ISubstrate
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sx?: CSSProperties;
  sxRoot?: CSSProperties;
  isFillH?: boolean;
  isRound?: boolean;
  isContentCentered?: boolean;
  dropdown?: ISubstrateDropdown;
}
