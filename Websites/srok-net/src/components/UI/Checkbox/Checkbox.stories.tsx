import { ComponentMeta } from "@storybook/react";
import dedent from "ts-dedent";
import React from "react";

import { Checkbox } from "./Checkbox";

const describe = dedent`
<br>
## How to use
Component Checkbox , includes props label - text,checked - 
shows what state the Checkbox is in, onChange - callback function for change event.
Optionally, you can set the name props to work with form libraries, for example - Formik, ReduxForm.

 
Example:
           
                <Checkbox name={name} onChange={onChange} checked={checked} label={label} />
                    
`;

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: describe,
      },
    },
    controls: { sort: "requiredFirst" },
  },
} as ComponentMeta<typeof Checkbox>;

const componentWrapperStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#000",
  padding: 10,
  height: "50vw",
};

export const CheckboxStory = () => {
  const [errorsChecked, setErrorsChecked] = React.useState(true);
  const [warningsChecked, setWarningsChecked] = React.useState(false);

  const checkboxes = [
    {
      label: "Ошибки",
      name: "errors",
      checked: errorsChecked,
      onChange: () => setErrorsChecked(!errorsChecked),
    },
    {
      label: "Предупреждения",
      name: "warnings",
      checked: warningsChecked,
      onChange: () => setWarningsChecked(!warningsChecked),
    },
  ];

  return (
    <div style={componentWrapperStyles}>
      <h3
        style={{
          color: "white",
        }}
      >
        Checkbox
      </h3>
      <div>
        {checkboxes.map((item) => (
          <div style={{ marginBottom: 10 }} key={item.name}>
            <Checkbox
              name={item.name}
              label={item.label}
              checked={item.checked}
              onChange={item.onChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
