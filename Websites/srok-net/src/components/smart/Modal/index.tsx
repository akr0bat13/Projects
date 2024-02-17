import cn from "classnames";
import React, {
  CSSProperties,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useEffect,
} from "react";

import { Button } from "src/components/UI/Button/Button";
import ResetIcon from "src/components/icons/ResetIcon";
import "./Modal.scss";

export interface IModal
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  active: boolean;
  setActive: (active: boolean) => void;
  rootStyles?: CSSProperties;
  modalStyles?: CSSProperties;
  contentStyles?: CSSProperties;
  dataTestId?: string;
}

const Modal: FC<IModal> = (props) => {
  const {
    active,
    setActive,
    contentStyles,
    modalStyles,
    children,
    rootStyles,
    dataTestId,
  } = props;

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }
  }, [active]);

  const closeHandler = () => {
    setActive(false);
  };
  const contentDefender = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div
      className={cn("modal", {
        hide: !active,
      })}
      onMouseDown={closeHandler}
      style={rootStyles}
      data-testid={`modal${dataTestId ? `-${dataTestId}` : ""}`}
    >
      <div
        className={cn("modal-wrapper", {
          "hide-content": !active,
        })}
        style={modalStyles}
        onMouseDown={contentDefender}
      >
        <div className="modal-blocks">
          <div className="modal-controllers">
            <Button icon={<ResetIcon />} onClick={closeHandler} />
          </div>
          <div className="modal-content" style={contentStyles}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
