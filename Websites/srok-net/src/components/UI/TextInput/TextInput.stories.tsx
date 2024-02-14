import { ComponentMeta } from "@storybook/react";
import { useState } from "react";

import { TextInput } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const componentWrapperStyles: React.CSSProperties = {
  padding: 50,
  width: 300,
  height: "50vw",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  backgroundColor: "lightgray",
};

export const TextInputdStory = () => {
  const [value, setValue] = useState("");

  return (
    <div style={componentWrapperStyles}>
      <h3>Text Input</h3>
      <div>
        <TextInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <div>
        <TextInput isPassword={true} />
      </div>
      <div>
        <TextInput isPassword={true} isInfo infoHandler={() => alert("info")} />
      </div>
      <div>
        <TextInput isSearch />
      </div>
      <div>
        <TextInput isSearch isSearchLoading />
      </div>
    </div>
  );
};
