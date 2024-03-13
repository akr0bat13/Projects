import { ComponentMeta } from "@storybook/react";
import React, { ChangeEvent, useState } from "react";
import dedent from "ts-dedent";

import { Radio } from "./Radio";
import { RadioOptions } from "./utils/types/types";

const describe = dedent`
<br>
## How to use
it is used to create a group of radio buttons (switches) describing a set of interrelated parameters. At the same time, the user can select only one radio button from the suggested ones.
                    
`;

export default {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: describe,
      },
    },
    controls: { sort: "requiredFirst" },
  },
} as ComponentMeta<typeof Radio>;

const componentWrapperStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  padding: "20px 50px",
  height: "50vw",
  background: "#fafafa",
  gap: 10,
};

export const RadioStory = () => {
  const [type, setType] = useState(1);

  const radio_options: RadioOptions = {
    value1: {
      value: 1,
      label: "file",
    },
    value2: {
      value: 2,
      label: "file1",
    },
    value3: {
      value: 3,
      label: "file2",
    },
  };

  const ChangeType = (e: ChangeEvent<HTMLInputElement>) => {
    setType(parseInt(e.target.value));
  };

  return (
    <div style={componentWrapperStyles}>
      <Radio options={radio_options} onChange={ChangeType} selected={type} />
    </div>
  );
};
