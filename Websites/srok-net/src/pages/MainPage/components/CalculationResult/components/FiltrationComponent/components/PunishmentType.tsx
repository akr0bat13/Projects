import React from "react";

import { Checkbox } from "src/components/UI/Checkbox/Checkbox";
import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";
import { useSelector } from "src/store";
import { calculatorFiltrationValues } from "src/store/slices/CalculatorFiltration/calculatorFiltration.selectors";

import { useFiltrationComponent } from "../hooks/useFiltrationComponent";

const PunishmentType = () => {
  const { punishmentType } = useSelector(calculatorFiltrationValues);
  const { handlePunishmentChange } = useFiltrationComponent();
  return (
    <div className="filtration-component-item">
      <H variant="lg" color="blue">
        Вид наказания
      </H>
      {punishmentType.map((item) => {
        const { title } = item;
        return (
          <div key={title} className="filtration-preventive-measure-item">
            <P variant="md">{title}</P>
            <Checkbox
              onChange={(event) => handlePunishmentChange(event, title)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PunishmentType;
