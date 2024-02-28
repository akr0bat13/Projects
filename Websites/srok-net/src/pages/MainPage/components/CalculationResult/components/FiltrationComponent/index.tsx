import React from "react";

import { H } from "src/components/UI/Text/H";

import { useFiltrationComponent } from "./hooks/useFiltrationComponent";

const FiltrationComponent = () => {
  const { preventiveMeasure } = useFiltrationComponent();
  return (
    <div className="filtration-component-wrapper">
      <div className="filtration-component-item">
        <H variant="lg" color="blue">
          Мера пресечения
        </H>
        {preventiveMeasure.map((item) => {
          return item.title;
        })}
      </div>
    </div>
  );
};

export default FiltrationComponent;
