import cn from "classnames";
import React, { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

import { useDynamicComponents } from "./hooks/useDynamicComponents";

type ContentType = {
  children?: ReactNode;
};

const DynamicComponents: FC<ContentType> = ({ children }) => {
  const { isMobile } = useDynamicComponents();
  return (
    <div
      className={cn("content-wrapper", {
        "content-wrapper-none": isMobile,
      })}
    >
      <div className="content">{<Outlet /> || children}</div>
    </div>
  );
};

export default DynamicComponents;
