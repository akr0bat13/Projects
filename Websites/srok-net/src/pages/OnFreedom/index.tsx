import React, { useState } from "react";

import HowItWorks from "src/components/UI/HowItWorks";
import { SectionLayout } from "src/components/UI/SectionLayout/SectionLayout";
import Notification from "src/components/smart/Notification";

import JusticeSearch from "./components/JusticeSearch";
import SearchResults from "./components/SearchResults";
import { useOnFreedom } from "./hooks/useOnFreedom";

const OnFreedom = () => {
  const { searchResult } = useOnFreedom();
  const [result, setResult] = useState<boolean>(false);

  return (
    <SectionLayout title="На свободу">
      <JusticeSearch setResult={setResult} />
      {result &&
        searchResult.map((component) => (
          <SearchResults key={component.title} {...component} />
        ))}
      <HowItWorks />
      <Notification />
    </SectionLayout>
  );
};

export default OnFreedom;
