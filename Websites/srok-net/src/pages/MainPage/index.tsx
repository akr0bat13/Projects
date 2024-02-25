import React, { useState } from "react";

import HowItWorks from "src/components/UI/HowItWorks";
import { SectionLayout } from "src/components/UI/SectionLayout/SectionLayout";

import CalculatorSearch from "./components/CalculatorSearch";

const MainPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [result, setResult] = useState<boolean>(false);

  return (
    <SectionLayout title="Калькулятор">
      <CalculatorSearch setResult={setResult} />
      <HowItWorks />
    </SectionLayout>
  );
};

export default MainPage;
