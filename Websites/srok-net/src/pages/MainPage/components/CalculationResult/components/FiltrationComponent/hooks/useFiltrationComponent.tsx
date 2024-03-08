/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from "react";

import { TOption } from "src/components/UI/Select/Select";
import { useDispatch, useSelector } from "src/store";
import {
  addHomeArrestValuesAction,
  removeHomeArrestValuesAction,
  toggleHomeArrest,
  togglePunishmentType,
  updateApilationDate,
  updateApilationDetention,
  updateApilationMonth,
  updateApilationYear,
  updateHomeArrestValues,
} from "src/store/slices/CalculatorFiltration";
import { calculatorFiltrationApilation } from "src/store/slices/CalculatorFiltration/calculatorFiltration.selectors";
import { updateChargeArticleAction } from "src/store/slices/CalculatorSearch";
import {
  IApilationProps,
  IFiltrationDate,
} from "src/utils/types/CalculatorFiltration.types";

const options: TOption[] = [
  {
    label: "value1",
    value: "value1",
  },
  {
    label: "value2",
    value: "value2",
  },
  {
    label: "value3",
    value: "value3",
  },
];

export const useFiltrationComponent = () => {
  const dispatch = useDispatch();
  const { apilationDate, years, month, detention } = useSelector(
    calculatorFiltrationApilation
  );
  const [homeArrestValues, setHomeArrestValues] = useState<IFiltrationDate[]>([
    {
      id: 1,
      start: null,
      end: null,
    },
  ]);

  const [active, setActive] = useState<boolean>(false);
  const [apilationProps, setApilationProps] = useState<IApilationProps>({
    years,
    month,
    apilationDate,
    detention,
  });

  const [apilationSelect, setApilationSelect] = useState<TOption>({
    value: "",
    label: "",
  });

  const handlePreventiveMeasureChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(toggleHomeArrest(event.target.checked));
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

  const apilationSelectHandler = (elem: TOption<string>) => {
    setApilationSelect(elem);
    dispatch(updateApilationDetention(elem.value));
  };

  const setChargeArticleState = (
    id: number,
    field: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newState = event.target.value;

    dispatch(
      updateChargeArticleAction({ id, newState: { [field]: newState } })
    );

    // setChargeArticleValue((prevState) =>
    //   prevState.map((item) =>
    //     item.id === id ? { ...item, [field]: newState } : item
    //   )
    // );
  };

  const addHomeArrestValue = () => {
    const newArticle: IFiltrationDate = {
      id: homeArrestValues.length + 1,
      start: null,
      end: null,
    };
    setHomeArrestValues([...homeArrestValues, newArticle]);
    dispatch(addHomeArrestValuesAction(newArticle));
  };

  const setUpdateHomeArrestValues = (
    id: number,
    field: string,
    date: Date | null
  ) => {
    setHomeArrestValues((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, [field]: date } : item
      )
    );
    const newState = date ? date.toLocaleDateString("ru-RU") : "";
    dispatch(updateHomeArrestValues({ id, newState: { [field]: newState } }));
  };

  const removeHomeArrestValue = (id: number) => {
    if (homeArrestValues.length !== 1) {
      setHomeArrestValues(homeArrestValues.filter((value) => value.id !== id));
      dispatch(removeHomeArrestValuesAction(id));
    }
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
    apilationSelectHandler,
    apilationSelect,
    options,
    setChargeArticleState,
    setUpdateHomeArrestValues,
    homeArrestValues,
    addHomeArrestValue,
    removeHomeArrestValue,
  };
};
