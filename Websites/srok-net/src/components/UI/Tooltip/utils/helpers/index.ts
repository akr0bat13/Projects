import { CSSProperties } from "react";

import { TooltipPosition } from "src/components/UI/Tooltip/utils/types/tooltip.types";

const ARROW_SIZE = "6px";
const TRANSPARENT_ARROW = `${ARROW_SIZE} solid transparent`;
const COLORED_ARROW = `${ARROW_SIZE} solid #0C64C5`;

export const getArrowStyles: (position: TooltipPosition) => CSSProperties = (
  position
) => {
  switch (position) {
    case "top":
      return {
        borderLeft: TRANSPARENT_ARROW,
        borderRight: TRANSPARENT_ARROW,
        borderTop: COLORED_ARROW,
      };
    case "left":
      return {
        borderLeft: COLORED_ARROW,
        borderTop: TRANSPARENT_ARROW,
        borderBottom: TRANSPARENT_ARROW,
      };
    case "right":
      return {
        borderRight: COLORED_ARROW,
        borderTop: TRANSPARENT_ARROW,
        borderBottom: TRANSPARENT_ARROW,
      };
    case "bottom":
      return {
        borderLeft: TRANSPARENT_ARROW,
        borderRight: TRANSPARENT_ARROW,
        borderBottom: COLORED_ARROW,
      };
  }
};

export const calcStyles: (
  position: TooltipPosition,
  width: number,
  height: number
) => { tooltip: CSSProperties; arrow: CSSProperties } = (
  position,
  width,
  height
) => {
  switch (position) {
    case "top":
      return {
        tooltip: {
          top: `calc(-1 * (${height}px + ${ARROW_SIZE} + 1px))`,
          left: `calc(-1 * (-50% + ${width / 2}px))`,
        },
        arrow: {
          bottom: `-${ARROW_SIZE}`,
          left: `calc(${width / 2}px - ${ARROW_SIZE})`,
        },
      };
    case "left":
      return {
        tooltip: {
          top: `calc(-1 * (-50% + ${height / 2}px))`,
          left: `calc(-1 * (${width}px + ${ARROW_SIZE} + 1px))`,
        },
        arrow: {
          top: `calc(${height / 2}px - ${ARROW_SIZE})`,
          right: `-${ARROW_SIZE}`,
        },
      };
    case "right":
      return {
        tooltip: {
          top: `calc(-1 * (-50% + ${height / 2}px))`,
          left: `calc(100% + ${ARROW_SIZE} + 1px)`,
        },
        arrow: {
          top: `calc(${height / 2}px - ${ARROW_SIZE})`,
          left: `-${ARROW_SIZE}`,
        },
      };
    case "bottom":
    default:
      return {
        tooltip: {
          top: `calc(100% + ${ARROW_SIZE} + 1px)`,
          left: `calc(-1 * (-50% + ${width / 2}px))`,
        },
        arrow: {
          top: `-${ARROW_SIZE}`,
          left: `calc(${width / 2}px - ${ARROW_SIZE})`,
        },
      };
  }
};
