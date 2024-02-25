import { ComponentMeta } from "@storybook/react";
import dedent from "ts-dedent";
import React, { useState } from "react";

import { DatePicker, DateRange } from "./DatePicker";

const describe = dedent`
<br>
## How to use
The Datepicker component is used to select a time period with an indication of the interval between the start and end of the period. The period can be as long as a day, a month, or a year.

 
Example:
           
                <DatePicker dates={dates} onChange={setDates} />
                    
`;

export default {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: describe,
      },
    },
  },
} as ComponentMeta<typeof DatePicker>;

const componentWrapperStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  padding: 10,
  height: "100vh",
  width: 200,
  color: "white",
};

export const DatePickerStory = () => {
  const [dates, setDates] = useState<DateRange>({
    date_start: null,
    date_end: null,
  });
  const values = `
  {
    date_start: ${dates.date_start},
    date_end: ${dates.date_end}
  }
  
  `;
  return (
    <div style={componentWrapperStyles}>
      <h3 style={{ color: "black" }}>DatePicker</h3>
      <pre style={{ color: "black" }}>{values}</pre>
      <DatePicker dates={dates} onChange={setDates} />
    </div>
  );
};
