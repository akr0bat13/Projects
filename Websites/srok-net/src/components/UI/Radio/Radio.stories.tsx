import { ComponentMeta } from "@storybook/react";
import dedent from "ts-dedent";
import React, { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import { displayGroupType } from "src/sections/Access/pages/AccessGroups/utils/helpers/helpers";

import { RadioOptions } from "./utils/types/types";
import { Radio } from "./Radio";

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
  background: "#000",
  gap: 10,
};

export const RadioStory = () => {
  const { t } = useTranslation();
  const [type, setType] = useState("file");

  const radio_options: RadioOptions = {
    ipv4: {
      value: "file",
      label: t(displayGroupType("file")),
    },
    fc: {
      value: "block/fc",
      label: t(displayGroupType("block/fc")),
    },
    iscsi: {
      value: "block/iscsi",
      label: t(displayGroupType("block/iscsi")),
    },
  };

  const ChangeType = (e: ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };

  return (
    <div style={componentWrapperStyles}>
      <Radio options={radio_options} onChange={ChangeType} selected={type} />
    </div>
  );
};
