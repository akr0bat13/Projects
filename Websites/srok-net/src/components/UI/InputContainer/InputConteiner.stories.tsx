import { ComponentMeta } from "@storybook/react";
import { useState } from "react";
import dedent from "ts-dedent";

import { TextInput } from "../TextInput/TextInput";

import { InputContainer } from "./InputContainer";

const describe = dedent`
<br>
## How to use

The InputContainer component is a wrapper for a form element. The input itself goes as a child element, and the label is set by the prop.

 
Example:
           
                <InputContainer sx={sx} label={label} fieldStyles={fieldStyles}><Input/><InputContainer/>
                    
`;

export default {
  title: "Components/InputContainer",
  component: InputContainer,
  parameters: {
    docs: {
      description: {
        component: describe,
      },
    },
    controls: { sort: "requiredFirst" },
  },
} as ComponentMeta<typeof InputContainer>;

const componentWrapperStyles: React.CSSProperties = {
  backgroundColor: "lightgray",
  padding: 50,
  height: "50vw",
};

export const InputContainerSrtory = () => {
  const [value, setValue] = useState("");

  return (
    <div style={componentWrapperStyles}>
      <h3>Text Input</h3>
      <div
        style={{
          width: 300,
        }}
      >
        <InputContainer
          label={"Label:"}
          fieldStyles={{
            width: "25vw",
            maxWidth: 250,
          }}
          styleConteiner={{
            marginTop: 20,
          }}
          color="blue"
        >
          <TextInput
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </InputContainer>
      </div>
    </div>
  );
};
