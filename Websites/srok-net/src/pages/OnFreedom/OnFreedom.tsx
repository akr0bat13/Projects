import React, { useState } from "react";

import { SectionLayout } from "src/components/UI/SectionLayout/SectionLayout";

import HowItWork from "./components/HowItWork";
import JusticeSearch from "./components/JusticeSearch";
import SearchResults from "./components/SearchResults";
import { useOnFreedom } from "./hooks/useOnFreedom";

const OnFreedom = () => {
  const { searchResult } = useOnFreedom();
  const [result, setResult] = useState<boolean>(false);

  return (
    <SectionLayout title="На свободу">
      <JusticeSearch setResult={setResult} />
      <HowItWork />
      {result &&
        searchResult.map((component) => (
          <SearchResults key={component.title} {...component} />
        ))}
    </SectionLayout>
  );
};

export default OnFreedom;
