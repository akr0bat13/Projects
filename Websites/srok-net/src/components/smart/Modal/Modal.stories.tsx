import { Button } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { CSSProperties, useState } from "react";
import dedent from "ts-dedent";

import Modal from "./index";

const describe = dedent`
           <br>
           ## Synopsis
           Modal component is a normal popup,
           except we can put a custom title in it.
          `;

const rootStyles: CSSProperties = {
  width: "100%",
  height: "100%",
  position: "relative",
};

const modalStyles: CSSProperties = {
  color: "white",
  maxWidth: "400px",
};

const contentStyles: CSSProperties = {
  height: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const SomeHeader = () => <p>This is some model Header</p>;
const SomeChild = () => <h4>This is some modal content</h4>;

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    Header: {
      options: {
        Default: [],
        WithChild: <SomeHeader />,
      },
    },
    children: {
      table: {
        type: {
          summary: "ReactNode",
        },
      },
      options: {
        Default: [],
        WithChild: <SomeChild />,
      },
    },
    theme: {
      table: {
        defaultValue: {
          summary: "dark",
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: describe,
      },
    },
    controls: { sort: "requiredFirst" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalWithHeader = Template.bind({});
export const ModalWithoutHeader = Template.bind({});

const argsValues = {
  rootStyles,
  modalStyles,
  contentStyles,
};

ModalWithHeader.args = {
  ...argsValues,
  active: true,
  setActive: () => null,
  children: <SomeChild />,
};

ModalWithoutHeader.args = {
  ...argsValues,
  active: true,
  setActive: () => null,
  children: <SomeChild />,
};

export const ModalAnimation = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Button variant={"contained"} onClick={() => setModal(!modal)}>
        Toggle Modal
      </Button>
      <Modal {...argsValues} active={modal} setActive={setModal}>
        <SomeChild />
      </Modal>
    </>
  );
};
