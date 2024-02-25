import { FC } from "react";

import { IconType } from "./types/icon.types";

const RemoveIcon: FC<IconType> = (props) => {
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
        d="M11.9202 22C17.4202 22 21.9202 17.5 21.9202 12C21.9202 6.5 17.4202 2 11.9202 2C6.42017 2 1.92017 6.5 1.92017 12C1.92017 17.5 6.42017 22 11.9202 22Z"
        stroke={fill || "#0C64C5"}
        strokeWidth="1.85168"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.91992 12H15.9199"
        stroke={fill || "#0C64C5"}
        strokeWidth="1.85168"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RemoveIcon;
