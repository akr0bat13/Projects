import { FC } from "react";

import { IconType } from "src/components/icons/types/icon.types";

export const MenuMobile: FC<IconType> = (props) => {
  const { fill } = props;
  return (
    <svg
      width="26"
      height="18"
      viewBox="0 0 26 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.66699H25"
        stroke={fill || "#fff"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M1 9H25"
        stroke={fill || "#fff"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M1 17H25"
        stroke={fill || "#fff"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
