import "./Tooltip.scss";
import {
  FC,
  ReactNode,
  useState,
  CSSProperties,
  useLayoutEffect,
  useId,
  useEffect,
} from "react";
import cn from "classnames";

import {
  TooltipPosition,
  TooltipTrigger,
} from "src/components/UI/Tooltip/utils/types/tooltip.types";

import { calcStyles, getArrowStyles } from "./utils/helpers";

interface TooltipProps {
  children: ReactNode;
  content: ReactNode | string;
  position: TooltipPosition;
  trigger?: TooltipTrigger;
  condition?: boolean;
  tooltipWidth?: number;
  sxMain?: CSSProperties;
  sxTooltip?: CSSProperties;
  isShow?: boolean;
}

export const Tooltip: FC<TooltipProps> = ({
  children,
  content,
  position = "bottom",
  trigger = "hover",
  tooltipWidth,
  sxMain,
  sxTooltip,
  condition,
  isShow,
}) => {
  const isConditionalTooltip = condition !== undefined;
  const isTriggerHover = trigger === "hover" && !isConditionalTooltip;
  const isTriggerClick = trigger === "click" && !isConditionalTooltip;
  const uniqId = useId().replace(/:/g, "");
  const id = `tooltip-${uniqId}`;
  const parentId = `parent-tooltip-${uniqId}`;
  const tooltipDefaultStyles: CSSProperties = {
    width: tooltipWidth ?? "max-content",
  };

  const [show, setShow] = useState(false);
  const [arrowStyle, setArrowStyle] = useState<CSSProperties>(
    getArrowStyles(position)
  );
  const [tooltipStyle, setTooltipStyle] =
    useState<CSSProperties>(tooltipDefaultStyles);

  useLayoutEffect(() => {
    const tooltipEl = document.getElementById(id);
    if (!tooltipEl || !show) {
      return;
    }
    const { tooltip, arrow } = calcStyles(
      position,
      tooltipEl.offsetWidth,
      tooltipEl.offsetHeight
    );
    setTooltipStyle({
      ...tooltipDefaultStyles,
      ...tooltip,
    });
    setArrowStyle({
      ...getArrowStyles(position),
      ...arrow,
    });
  }, [show]);

  useEffect(() => {
    if (!isConditionalTooltip) return;
    setShow(condition);
  }, [condition]);

  useEffect(() => {
    if (isShow) {
      setShow(false);
    }
  }, [isShow]);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!show) {
      setShow(true);
      return;
    }
    const content = e.target as HTMLElement;
    const contentWrapper = content.closest(".tooltip-content");
    if (contentWrapper) {
      return;
    }
    setShow(false);
  };

  const onBlurHandler = () => {
    setTimeout(() => {
      const activeElement = document.activeElement;
      if (!activeElement) {
        return;
      }
      const parentTooltip = activeElement.closest(`#${parentId}`);
      if (parentTooltip) {
        return;
      }
      setShow(false);
    }, 0);
  };

  return (
    <div
      className={cn("tooltip-main", {
        "tooltip-main-conditional": isConditionalTooltip,
        "tooltip-pointer": !!content,
      })}
      onMouseEnter={isTriggerHover ? handleMouseEnter : void 0}
      onMouseLeave={isTriggerHover ? handleMouseLeave : void 0}
      onClick={isTriggerClick ? handleClick : void 0}
      onBlur={onBlurHandler}
      tabIndex={0}
      id={parentId}
      style={sxMain}
    >
      {children}
      {!!content && (
        <div
          className={cn("tooltip", {
            "tooltip-hidden": !show,
            "tooltip-non-conditional": !isConditionalTooltip,
            "tooltip-conditional": show && isConditionalTooltip,
          })}
          style={{ ...(!isConditionalTooltip && tooltipStyle), ...sxTooltip }}
          id={id}
        >
          {!isConditionalTooltip && (
            <div className="tooltip-arrow" style={arrowStyle} />
          )}
          <div
            className={cn("tooltip-content", {
              "tooltip-content-conditional": isConditionalTooltip,
            })}
          >
            {content}
          </div>
        </div>
      )}
    </div>
  );
};
