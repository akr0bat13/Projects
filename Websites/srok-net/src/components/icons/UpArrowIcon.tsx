import { FC } from "react";

import { IconType } from "./types/icon.types";

const UpArrowIcon: FC<IconType> = (props) => {
  const { fill } = props;
  return (
    <svg
      width="19"
      height="10"
      viewBox="0 0 19 10"
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 2.02901L17.5448 9.76039C17.8924 10.0944 18.4389 10.0771 18.7656 9.72178C19.0923 9.36647 19.0754 8.80768 18.7279 8.47368L10.2098 0.287533C9.81089 -0.0958492 9.1891 -0.09584 8.79018 0.287534L0.272126 8.47368C-0.0754101 8.80768 -0.0923141 9.36647 0.23437 9.72178C0.561053 10.0771 1.10762 10.0944 1.45515 9.76039L9.5 2.02901Z"
        fill={fill || "#0C64C5"}
      />
    </svg>
  );
};

export default UpArrowIcon;
