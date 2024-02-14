import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IconWrapperTypes
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size: number;
}
