import { FC } from "react";
import "./IconWrapper.scss";

import { IconWrapperTypes } from "./IconWrapper.typings";

const IconWrapper: FC<IconWrapperTypes> = (props) => {
  const { size, children, style: sx } = props;
  return (
    <div
      {...props}
      className="icon-wrapper-root"
      style={{
        width: size,
        height: size,
        ...sx,
      }}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
