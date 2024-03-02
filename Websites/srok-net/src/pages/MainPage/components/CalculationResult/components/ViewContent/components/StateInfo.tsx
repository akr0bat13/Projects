import React from "react";

import { useViewContent } from "../hooks/useViewContent";

const StateInfo = () => {
  const { mockStateResult } = useViewContent();
  const { part, punishment, severity, state, title } = mockStateResult;
  return (
    <div className="state-content-wrapper">
      <div className="state-content-item">
        <span>Ст.</span> {state} <span>ч.</span> {part} - {title}
      </div>
      <div className="state-content-item">
        <span>Тяжесть:</span> {severity}
      </div>
      <div className="state-content-item">
        <span>Предусмотренное(-ые) наказание(-я):</span> {punishment}
      </div>
    </div>
  );
};

export default StateInfo;
