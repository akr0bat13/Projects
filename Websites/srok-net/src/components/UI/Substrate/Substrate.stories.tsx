import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { CSSProperties } from "react";
import dedent from "ts-dedent";

import { ISubstrate } from "./utils/types/Substrate.typings";

import Substrate from "./index";

const describe = dedent`
           <br>
           ## How to use
           Substrate component is just a wrapper that
           we can using inside other components.  
           As well, we can combine Substrate inside oneself 
           as much as we want, see examples.
          `;

const settings: ISubstrate = {
  sx: { color: "white" },
  isRound: true,
  isFillH: true,
};

const multiplySettings: ISubstrate = {
  sx: { color: "white", height: "100%" },
  isRound: true,
  isFillH: true,
};

const mainSettings: CSSProperties = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const multiplyMainSettings: CSSProperties = {
  display: "flex",
  padding: "26px",
  gap: "29px",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  boxSizing: "border-box",
  color: "white",
  flexDirection: "column",
};

const multiplySubMainSettings: CSSProperties = {
  display: "flex",
  padding: "26px",
  gap: "29px",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  boxSizing: "border-box",
  color: "white",
  width: "100%",
};

const childSettings: ISubstrate = {
  isRound: true,
};

const multiplyMainChildSettings: CSSProperties = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default {
  title: "Components/Substrate",
  component: Substrate,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: describe,
      },
    },
    controls: { sort: "requiredFirst" },
  },
} as ComponentMeta<typeof Substrate>;

export const SubstrateStory: ComponentStory<typeof Substrate> = (args) => (
  <div style={{ height: "500px" }}>
    <Substrate {...args}>
      <div style={mainSettings}>
        <h2>This is some content</h2>
      </div>
    </Substrate>
  </div>
);

SubstrateStory.args = settings;

export const SubstrateMultiplyStory: ComponentStory<typeof Substrate> = (
  args
) => {
  return (
    <div style={{ height: "500px" }}>
      <Substrate {...args}>
        <div style={multiplyMainSettings}>
          <h2>Main Substrate</h2>
          <div style={multiplySubMainSettings}>
            <Substrate {...childSettings}>
              <div style={multiplyMainChildSettings}>
                <h2>First Child Substrate</h2>
              </div>
            </Substrate>
            <Substrate {...childSettings}>
              <div style={multiplyMainChildSettings}>
                <h2>Second Child Substrate</h2>
              </div>
            </Substrate>
          </div>
        </div>
      </Substrate>
    </div>
  );
};

SubstrateMultiplyStory.args = multiplySettings;
