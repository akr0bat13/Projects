import React from "react";

import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";

import { useViewContent } from "../hooks/useViewContent";

const Result = () => {
  const { mockResultData } = useViewContent();
  return (
    <div className="reuslt-content-wrapper">
      <H variant="hd" color="blue">
        Результат
      </H>
      <div className="reuslt-info">
        {mockResultData.map((item) => {
          const { title, date, fromApilation } = item;
          return (
            <div key={title} className="reuslt-info-item">
              <P variant="md" color="blue">
                {title}
              </P>
              <div className="reuslt-info-item-text">
                Дата:
                <span>{date}</span>
              </div>

              <div className="reuslt-info-item-text">
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
