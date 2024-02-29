import React from "react";

import { SwitchToggle } from "src/components/UI/SwitchToggle/SwitchToggle";
import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";
import { useSelector } from "src/store";
import { calculatorFiltrationValues } from "src/store/slices/CalculatorFiltration/calculatorFiltration.selectors";

import { useFiltrationComponent } from "../hooks/useFiltrationComponent";

const PreventiveMeasure = () => {
  const { preventiveMeasure } = useSelector(calculatorFiltrationValues);
  const { handlePreventiveMeasureChange } = useFiltrationComponent();

  return (
    <div className="filtration-component-item">
      <H variant="lg" color="blue">
        Мера пресечения
      </H>
      {preventiveMeasure.map((item) => {
        const { title } = item;
        return (
          <div key={title} className="filtration-preventive-measure-item">
            <P variant="md">{title}</P>
            <SwitchToggle
              onChange={(event) => handlePreventiveMeasureChange(event, title)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PreventiveMeasure;
