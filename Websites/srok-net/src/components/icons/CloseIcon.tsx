import { FC } from "react";

import { IconType } from "src/components/icons/types/icon.types";

export const CloseIcon: FC<IconType> = (props) => {
  const { fill } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 18L6 6"
        stroke={fill || "#0C64C5"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 18L18 6"
        stroke={fill || "#0C64C5"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="0.5"
        y="0.5"
        width="23"
        height="23"
        rx="2.5"
        stroke={fill || "#0C64C5"}
      />
    </svg>
  );
};
