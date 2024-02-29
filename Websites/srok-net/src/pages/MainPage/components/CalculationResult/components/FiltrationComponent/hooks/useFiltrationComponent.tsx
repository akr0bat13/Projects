import { ChangeEvent, useState } from "react";

import { useDispatch, useSelector } from "src/store";
import {
  togglePreventiveMeasure,
  togglePunishmentType,
  updateApilationDate,
} from "src/store/slices/CalculatorFiltration";
import { calculatorFiltrationApilation } from "src/store/slices/CalculatorFiltration/calculatorFiltration.selectors";

export const useFiltrationComponent = () => {
  const dispatch = useDispatch();
  const { apilationDate } = useSelector(calculatorFiltrationApilation);

  const [active, setActive] = useState<boolean>(false);
  const [apilation, setApilation] = useState<Date | null>(apilationDate);

  const handlePreventiveMeasureChange = (
    event: ChangeEvent<HTMLInputElement>,
    title: string
  ) => {
    dispatch(togglePreventiveMeasure({ title, value: event.target.checked }));
  };

  const handlePunishmentChange = (
    event: ChangeEvent<HTMLInputElement>,
    title: string
  ) => {
    console.log(title);

    dispatch(togglePunishmentType({ title, value: event.target.checked }));
  };

  const showApilation = () => {
    setActive(!active);
  };

  const inputCalculatorApilationDate = (event: Date | null) => {
    setApilation(event);
    dispatch(updateApilationDate(event));
  };

  return {
    handlePreventiveMeasureChange,
    handlePunishmentChange,
    active,
    showApilation,
    inputCalculatorApilationDate,
    apilation,
  };
};
