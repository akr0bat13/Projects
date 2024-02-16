import React from "react";

import { SectionLayout } from "src/components/UI/SectionLayout/SectionLayout";

import HowItWork from "./components/HowItWork";
import JusticeSearch from "./components/JusticeSearch";
import SearchResults from "./components/SearchResults";

const OnFreedom = () => {
  return (
    <SectionLayout title="На свободу">
      <JusticeSearch />
      <HowItWork />
      <SearchResults />
    </SectionLayout>
  );
};

export default OnFreedom;
