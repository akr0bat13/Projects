import React, { useState } from "react";

import HowItWorks from "src/components/UI/HowItWorks";
import { SectionLayout } from "src/components/UI/SectionLayout/SectionLayout";

import CalculationResult from "./components/CalculationResult";
import CalculatorSearch from "./components/CalculatorSearch";

const MainPage = () => {
  const [result, setResult] = useState<boolean>(false);

  return (
    <SectionLayout title="Калькулятор">
      <CalculatorSearch setResult={setResult} />
      {result ? (
        <CalculationResult />
      ) : (
        <HowItWorks styleConteiner={{ marginTop: 100 }} />
      )}
    </SectionLayout>
  );
};

export default MainPage;
