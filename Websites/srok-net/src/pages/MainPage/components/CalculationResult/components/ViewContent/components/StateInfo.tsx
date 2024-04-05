import React, { FC } from "react";

import { useSelector } from "src/store";
import { calculatorResult } from "src/store/slices/CalculatorResult/CalculatorResult.selectors";

const StateInfo: FC = () => {
  const { lawsInfo } = useSelector(calculatorResult);

  return (
    <div className="result-states-info">
      {lawsInfo.map((item) => {
        const { law, name, part, punishment, severity } = item;
        const [lawInteger, lawDecimal] = law.split(".");

        const formattedPart =
          part !== null ? parseFloat(part).toFixed(0) : part;
        return (
          <div className="state-content-wrapper" key={law}>
            <div className="state-content-item">
              <span>Ст.</span> {lawDecimal ? `${lawInteger}.` : lawInteger}
              {lawDecimal !== undefined &&
                lawDecimal !== "00" &&
                lawDecimal}{" "}
              {part !== null && <span>ч.</span>} {formattedPart} - {name}
            </div>
            <div className="state-content-item">
              <span>Тяжесть:</span> {severity}
            </div>
            <div className="state-content-item">
              <span>Предусмотренное(-ые) наказание(-я):</span> {punishment}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StateInfo;
