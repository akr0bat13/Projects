import { ChangeEvent } from "react";

import { useDispatch } from "src/store";
import {
  togglePreventiveMeasure,
  togglePunishmentType,
} from "src/store/slices/CalculatorFiltration";

export const useFiltrationComponent = () => {
  const dispatch = useDispatch();
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

  return { handlePreventiveMeasureChange, handlePunishmentChange };
};
