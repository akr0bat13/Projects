import React from "react";

import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";

import { useViewContent } from "../hooks/useViewContent";

const Result = () => {
  const { resultData } = useViewContent();
  const filteredResultData = resultData.filter(
    (item) => item.date !== null && item.fromApilation !== null
  );

  return (
    <div className="result-content-wrapper">
      <H variant="hd" color="blue">
        Результат
      </H>
      <div className="result-info">
        {filteredResultData.map((item) => {
          const { title, date, fromApilation } = item;
          return (
            <div key={title} className="result-info-item">
              <P variant="md" color="blue">
                {title}
              </P>
              <div className="result-info-item-text">
                {date && (
                  <>
                    Дата:
                    <span>{date}</span>
                  </>
                )}
              </div>

              <div className="result-info-item-text">
                {fromApilation && (
                  <>
                    {fromApilation?.subtitle}:<span>{fromApilation?.data}</span>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Result;
