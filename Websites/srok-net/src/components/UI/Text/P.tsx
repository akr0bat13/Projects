import cn from "classnames";
import { FC } from "react";

import "./Text.scss";
import { TextProps } from "./utils/types/text.types";

export const P: FC<TextProps> = (props) => {
  const { sx, children, color, variant, className, ...rest } = props;

  return (
    <p
      className={cn("text-root", className && className, {
        "text-small-variant": variant === "sm",
        "text-middle-variant": variant === "md",
        "text-large-variant": variant === "lg",
        "color-primary": color === "blue",
      })}
      style={sx}
      {...rest}
    >
      {children}
    </p>
  );
};
