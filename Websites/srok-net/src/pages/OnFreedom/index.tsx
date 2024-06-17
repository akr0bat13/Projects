import React, { useState } from "react";

import Advertisement from "src/components/UI/Advertisement";
import { SectionLayout } from "src/components/UI/SectionLayout/SectionLayout";

import JusticeSearch from "./components/JusticeSearch";
import SearchResults from "./components/SearchResults";
import { useOnFreedom } from "./hooks/useOnFreedom";

const OnFreedom = () => {
  const { searchResult, howItWorksContent } = useOnFreedom();
  const [result, setResult] = useState<boolean>(false);

  return (
    <SectionLayout title="На свободу">
      <JusticeSearch setResult={setResult} />
      {result &&
        searchResult.map((component) => (
          <SearchResults key={component.title} {...component} />
        ))}
      <div className="advertising-content-container">
        <Advertisement
          title={howItWorksContent.title}
          text={howItWorksContent.text}
        />
      </div>
    </SectionLayout>
  );
};

export default OnFreedom;
