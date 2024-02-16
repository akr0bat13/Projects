import { ComponentMeta } from "@storybook/react";

import { Select } from "./Select";

export default {
  title: "Components/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const componentWrapperStyles: React.CSSProperties = {
  width: 156,
  marginBottom: 40,
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const SelectStory = () => {
  return (
    <div>
      <h3>Селект</h3>
      <div style={componentWrapperStyles}>
        <Select options={options} placeholder="My select" />
      </div>
      <div style={componentWrapperStyles}>
        <Select options={options} disabled placeholder="Disabled" />
      </div>
    </div>
  );
};
