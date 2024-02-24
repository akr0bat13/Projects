import React from "react";

import HowItWorks from "src/components/UI/HowItWorks";
import { SectionLayout } from "src/components/UI/SectionLayout/SectionLayout";

const MainPage = () => {
  return (
    <SectionLayout title="Калькулятор">
      <HowItWorks />
    </SectionLayout>
  );
};

export default MainPage;
