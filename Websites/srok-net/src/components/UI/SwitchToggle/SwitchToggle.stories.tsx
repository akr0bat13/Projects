import { useState } from "react";
import dedent from "ts-dedent";

import { SwitchToggle } from "./SwitchToggle";

const describe = dedent`
           <br>
           ## How to use
           The SwitchToggle component is made to switch the state. The checked prop is responsible for the state of the switch, the setChecked prop is responsible for switching.

                <SwitchToggle checked={checked} setChecked={setChecked} />
          `;

export default {
  title: "Components/SwitchToggle",
  component: SwitchToggle,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: describe,
      },
    },
    controls: { sort: "requiredFirst" },
  },
};

export const SwitchToggleStory = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#000",
        height: "50vw",
        padding: 10,
        gap: 10,
      }}
    >
      <SwitchToggle
        checked={checked}
        onChange={() => setChecked(!checked)}
        title="Simple Toggle"
      />
    </div>
  );
};
