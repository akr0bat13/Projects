import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react";
export type textSize = "sm" | "md" | "lg" | "hd";
export type textColor = "blue" | "white";

export interface TextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  variant: textSize;
  sx?: CSSProperties;
  color?: textColor;
}
