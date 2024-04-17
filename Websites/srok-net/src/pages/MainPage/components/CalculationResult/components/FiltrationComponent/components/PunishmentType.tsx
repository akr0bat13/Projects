import React from "react";

import { Checkbox } from "src/components/UI/Checkbox/Checkbox";
import { H } from "src/components/UI/Text/H";
import { P } from "src/components/UI/Text/P";
import { useSelector } from "src/store";
import { calculatorFiltrationPunishment } from "src/store/slices/CalculatorFiltration/calculatorFiltration.selectors";

import { useFiltrationComponent } from "../hooks/useFiltrationComponent";

const PunishmentType = () => {
  const { handlePunishmentChange, punishmentType } = useFiltrationComponent();
  const { isActive } = useSelector(calculatorFiltrationPunishment);
  return (
    <div className="filtration-component-item">
      <H variant="lg" color="blue">
        Вид наказания
      </H>
      {punishmentType.map((item) => {
        const { title } = item;
        return (
          <div key={title} className="filtration-punishment-type-item">
            <P variant="md">{title}</P>
            <Checkbox
              checked={item.isActive && isActive}
              onChange={(event) => handlePunishmentChange(event, item)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PunishmentType;
