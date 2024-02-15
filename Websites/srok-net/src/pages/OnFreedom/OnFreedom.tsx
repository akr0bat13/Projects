import React from "react";

import { SectionLayout } from "src/components/UI/SectionLayout/SectionLayout";

import HowItWork from "./components/HowItWork";
import JusticeSearch from "./components/JusticeSearch";

const OnFreedom = () => {
  return (
    <SectionLayout title="На свободу">
      <JusticeSearch />
      <HowItWork />
    </SectionLayout>
  );
};

export default OnFreedom;
