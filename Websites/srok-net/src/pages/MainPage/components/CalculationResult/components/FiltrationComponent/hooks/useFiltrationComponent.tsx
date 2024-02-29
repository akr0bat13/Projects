import { ChangeEvent, useState } from "react";

import { useDispatch, useSelector } from "src/store";
import {
  togglePreventiveMeasure,
  togglePunishmentType,
  updateApilationDate,
  updateApilationMonth,
  updateApilationYear,
} from "src/store/slices/CalculatorFiltration";
import { calculatorFiltrationApilation } from "src/store/slices/CalculatorFiltration/calculatorFiltration.selectors";
import { IApilationProps } from "src/utils/types/CalculatorFiltration.types";

export const useFiltrationComponent = () => {
  const dispatch = useDispatch();
  const { apilationDate, years, month, detention } = useSelector(
    calculatorFiltrationApilation
  );

  const [active, setActive] = useState<boolean>(false);
  const [apilationProps, setApilationProps] = useState<IApilationProps>({
    years,
    month,
    apilationDate,
    detention,
  });

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
    setApilationProps({ ...apilationProps, apilationDate: event });
    dispatch(updateApilationDate(event));
  };

  const inputApilationYear = (event: ChangeEvent<HTMLInputElement>) => {
    setApilationProps({ ...apilationProps, years: event.target.value });
    dispatch(updateApilationYear(event.target.value));
  };

  const inputApilationMonth = (event: ChangeEvent<HTMLInputElement>) => {
    setApilationProps({ ...apilationProps, month: event.target.value });
    dispatch(updateApilationMonth(event.target.value));
  };

  return {
    handlePreventiveMeasureChange,
    handlePunishmentChange,
    active,
    showApilation,
    inputCalculatorApilationDate,
    apilationProps,
    inputApilationYear,
    inputApilationMonth,
  };
};
