import { FC } from "react";

import { IconType } from "./types/icon.types";

const DownArrowIcon: FC<IconType> = (props) => {
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
        d="M9.5 7.97099L17.5448 0.239614C17.8924 -0.0943804 18.4389 -0.0770979 18.7656 0.278215C19.0923 0.633528 19.0754 1.19232 18.7279 1.52632L10.2098 9.71247C9.81089 10.0958 9.1891 10.0958 8.79018 9.71247L0.272126 1.52632C-0.0754101 1.19232 -0.0923141 0.633528 0.23437 0.278215C0.561053 -0.0770979 1.10762 -0.0943804 1.45515 0.239614L9.5 7.97099Z"
        fill={fill || "#0C64C5"}
      />
    </svg>
  );
};

export default DownArrowIcon;
