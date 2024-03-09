import "./IconWrapper.scss";
import { FC } from "react";

interface IconWrapperProps {
  children?: JSX.Element;
  isOpen?: boolean;
}
const IconWrapper: FC<IconWrapperProps> = ({ children, isOpen }) => (
  <span className={isOpen ? "open-icon" : "closed-icon"}>{children}</span>
);

export default IconWrapper;
