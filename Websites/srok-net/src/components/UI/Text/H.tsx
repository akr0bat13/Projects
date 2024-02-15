import cn from "classnames";
import { FC } from "react";
import "./Text.scss";

import { TextProps } from "./utils/types/text.types";

export const H: FC<TextProps> = (props) => {
  const { sx, children, variant, color, className, ...rest } = props;

  return (
    <h2
      className={cn("text-root", className && className, {
        "text-small-variant": variant === "sm",
        "text-middle-variant": variant === "md",
        "text-large-variant": variant === "lg",
        "text-heading-variant": variant === "hd",
        "color-primary": color === "blue",
        "color-white": color === "white",
      })}
      style={sx}
      {...rest}
    >
      {children}
    </h2>
  );
};
