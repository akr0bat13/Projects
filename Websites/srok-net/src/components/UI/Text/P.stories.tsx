import { ComponentMeta } from "@storybook/react";
import dedent from "ts-dedent";

import { P } from "./P";

const describe = dedent`
<br>
## How to use

Component P is a wrapper for the text , you can set the size of the font with the prop variant.

 
Example:
           
                <P variant="lg">Simple text lg<P/>
                    
`;

export default {
  title: "Components/P",
  component: P,
  parameters: {
    docs: {
      description: {
        component: describe,
      },
    },
    controls: { sort: "requiredFirst" },
  },
} as ComponentMeta<typeof P>;

const componentWrapperStyles: React.CSSProperties = {
  backgroundColor: "lightgrey",
  padding: 10,
  height: "50vw",
};

export const PSrtory = () => {
  return (
    <div style={componentWrapperStyles}>
      <h3>Text</h3>
      <div
        style={{
          width: 300,
        }}
      >
        <P sx={{ marginBottom: "10px" }} variant="lg">
          Simple text lg
        </P>
        <P sx={{ marginBottom: "10px" }} variant="md">
          Simple text md
        </P>
        <P variant="sm">Simple text sm</P>
      </div>
    </div>
  );
};
