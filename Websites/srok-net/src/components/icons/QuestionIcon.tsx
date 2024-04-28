import { FC } from "react";

import { IconType } from "./types/icon.types";

const QuestionIcon: FC<IconType> = (props) => {
  const { fill } = props;
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        stroke={fill || "#0C64C5"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14V13.6267C12 12.4178 12.7591 11.7778 13.5181 11.2623C14.2591 10.7645 15 10.1245 15 8.95117C15 7.31562 13.6627 6 12 6C10.3373 6 9 7.31562 9 8.95117"
        stroke={fill || "#0C64C5"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.991 17.5H12.009"
        stroke={fill || "#0C64C5"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default QuestionIcon;
