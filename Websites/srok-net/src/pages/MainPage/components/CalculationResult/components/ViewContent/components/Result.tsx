import React from "react";

import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";

import { useViewContent } from "../hooks/useViewContent";

const Result = () => {
  const { mockResultData } = useViewContent();

  return (
    <div className="result-content-wrapper">
      <H variant="hd" color="blue">
        Результат
      </H>
      <div className="result-info">
        {mockResultData.map((item) => {
          const { title, date, fromApilation } = item;
          return (
            <div key={title} className="result-info-item">
              <P variant="md" color="blue">
                {title}
              </P>
              <div className="result-info-item-text">
                Дата:
                <span>{date}</span>
              </div>

              <div className="result-info-item-text">
                Срок с даты аппеляции:
                <span>{fromApilation}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Result;
