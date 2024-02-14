import { ComponentMeta } from "@storybook/react";
import dedent from "ts-dedent";

import { H } from "./H";

const describe = dedent`
<br>
## How to use

The H component is a wrapper for the header, with the variant prop you can set the font size.

 
Example:
           
                <H variant="lg">Heading lg<H/>
                    
`;

export default {
  title: "Components/H",
  component: H,
  parameters: {
    docs: {
      description: {
        component: describe,
      },
    },
    controls: { sort: "requiredFirst" },
  },
} as ComponentMeta<typeof H>;

const componentWrapperStyles: React.CSSProperties = {
  backgroundColor: "lightgray",
  padding: 10,
  height: "50vw",
};

export const HSrtory = () => {
  return (
    <div style={componentWrapperStyles}>
      <h3>Text</h3>
      <div
        style={{
          width: 300,
        }}
      >
        <H sx={{ marginBottom: "10px" }} variant="hd">
          Heading
        </H>
        <H sx={{ marginBottom: "10px" }} variant="lg">
          Heading lg
        </H>
        <H sx={{ marginBottom: "10px" }} variant="md">
          Heading md
        </H>
        <H sx={{ marginBottom: "10px" }} variant="sm">
          Heading sm
        </H>
        <H sx={{ marginBottom: "10px" }} variant="md" color="blue">
          Heading blue
        </H>
        <H sx={{ marginBottom: "10px" }} variant="md" color="white">
          Heading white
        </H>
      </div>
    </div>
  );
};
