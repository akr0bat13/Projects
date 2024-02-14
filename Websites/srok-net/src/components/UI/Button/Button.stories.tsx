import { ComponentMeta } from "@storybook/react";
import React from "react";
import dedent from "ts-dedent";

import { Button, ButtonProps } from "./Button";

const describe = dedent`
<br>
## How to use
Component Button , optionally includes props label - can be both text and ReactNode, icon - ReactNode, onClick - callback function for click event, sx - unique styles for the component. Optionally, you can set any parameters that are available for the html tag button.

 
Example:
           
                <Button icon={icon} label={label} onClick={()=>{}}/>
                    
`;

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: describe,
      },
    },
    controls: { sort: "requiredFirst" },
  },
} as ComponentMeta<typeof Button>;

const componentWrapperStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 40,
  width: "fit-content",
  backgroundColor: "lightgray",
  padding: 50,
};

const buttons: ButtonProps[] = [
  {
    label: "Сбросить фильтры",
    onClick: () => null,
    color: "primary",
  },
  {
    label: "Поиск",
    onClick: () => null,
    color: "secondary",
  },
];

export const ButtonStory = () => {
  return (
    <div>
      <h3>Button</h3>
      <div style={componentWrapperStyles}>
        {buttons.map((item) => (
          <Button
            sx={item.sx}
            icon={item.icon}
            label={item.label}
            onClick={item.onClick}
            key={item.label}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};
