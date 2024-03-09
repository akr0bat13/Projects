import { ComponentMeta } from "@storybook/react";
import React from "react";
import dedent from "ts-dedent";

import { H } from "src/components/UI/Text/H";
import SaveIcon from "src/components/icons/SaveIcon";

import { Tooltip } from "./Tooltip";

const describe = dedent`
<br>
## How to use
The Tooltip component is designed to display a tooltip when hovering or clicking

 
Example:
           
                 <Tooltip content="Bottom Content" position="bottom" trigger="click">
                      <SaveIcon />
            </Tooltip>
                    
`;

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: describe,
      },
    },
    controls: { sort: "requiredFirst" },
  },
} as ComponentMeta<typeof Tooltip>;

const componentWrapperStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  padding: "20px 50px",
  height: "50vw",
  gap: 10,
};

export const TooltipStory = () => {
  return (
    <div style={componentWrapperStyles}>
      <H sx={{ color: "#000" }} variant="md">
        The trigger to click
      </H>
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <Tooltip content="Bottom Content" position="bottom" trigger="click">
          <SaveIcon />
        </Tooltip>
        <Tooltip content="Top Content" position="top" trigger="click">
          <SaveIcon />
        </Tooltip>
        <Tooltip content="Left Content" position="left" trigger="click">
          <SaveIcon />
        </Tooltip>
        <Tooltip content="Right Content" position="right" trigger="click">
          <SaveIcon />
        </Tooltip>
      </div>
      <H sx={{ color: "#000" }} variant="md">
        The trigger to hover
      </H>
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <Tooltip content="Bottom Content" position="bottom" trigger="hover">
          <SaveIcon />
        </Tooltip>
        <Tooltip content="Top Content" position="top" trigger="hover">
          <SaveIcon />
        </Tooltip>
        <Tooltip content="Left Content" position="left" trigger="hover">
          <SaveIcon />
        </Tooltip>
        <Tooltip content="Right Content" position="right" trigger="hover">
          <SaveIcon />
        </Tooltip>
      </div>
    </div>
  );
};
