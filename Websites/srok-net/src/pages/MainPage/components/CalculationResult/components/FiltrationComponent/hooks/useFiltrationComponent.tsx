/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from "react";

import { TOption } from "src/components/UI/Select/Select";
import { useDispatch, useSelector } from "src/store";
import {
  addHomeArrestValuesAction,
  addRejectingCurrentDoingsAction,
  addTimeUnderArrestAction,
  removeHomeArrestValuesAction,
  removeRejectingCurrentDoingsAction,
  removeTimeUnderArrestAction,
  toggleHomeArrest,
  togglePunishmentType,
  toggleRejectingCurrentDoings,
  toggleTimeUnderArrest,
  updateApilationDate,
  updateApilationDetention,
  updateApilationMonth,
  updateApilationYear,
  updateHomeArrestValues,
  updateRejectingCurrentDoingsValues,
  updateTimeUnderArrestValues,
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

  const [timeUnderArrest, setTimeUnderArrest] = useState<IFiltrationDate[]>([
    {
      id: 1,
      start: null,
      end: null,
    },
  ]);

  const [rejectingCurrentDoings, setRejectingCurrentDoings] = useState<
    IFiltrationDate[]
  >([
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
    event: ChangeEvent<HTMLInputElement>,
    title: string
  ) => {
    switch (title) {
      case "Домашний арест":
        dispatch(toggleHomeArrest(event.target.checked));
        setHomeArrestValues([
          {
            id: 1,
            start: null,
            end: null,
          },
        ]);
        break;
      case "Срок содержания под стражей":
        dispatch(toggleTimeUnderArrest(event.target.checked));
        setTimeUnderArrest([
          {
            id: 1,
            start: null,
            end: null,
          },
        ]);
        break;
      case "Запрет определенных действий":
        dispatch(toggleRejectingCurrentDoings(event.target.checked));
        setRejectingCurrentDoings([
          {
            id: 1,
            start: null,
            end: null,
          },
        ]);
        break;
      default:
        break;
    }
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
  };

  const addFiltrationComponentValue = (title: string) => {
    const newArticle: IFiltrationDate = {
      id: homeArrestValues.length + 1,
      start: null,
      end: null,
    };

    const newArrest: IFiltrationDate = {
      id: timeUnderArrest.length + 1,
      start: null,
      end: null,
    };

    const newDoing: IFiltrationDate = {
      id: rejectingCurrentDoings.length + 1,
      start: null,
      end: null,
    };

    switch (title) {
      case "Домашний арест":
        setHomeArrestValues([...homeArrestValues, newArticle]);
        dispatch(addHomeArrestValuesAction(newArticle));
        break;
      case "Срок содержания под стражей":
        setTimeUnderArrest([...timeUnderArrest, newArrest]);
        dispatch(addTimeUnderArrestAction(newArrest));
        break;
      case "Запрет определенных действий":
        setRejectingCurrentDoings([...rejectingCurrentDoings, newDoing]);
        dispatch(addRejectingCurrentDoingsAction(newDoing));
        break;
      default:
        break;
    }
  };

  const setUpdateFiltrationComponentValue = (
    title: string,
    id: number,
    field: string,
    date: Date | null
  ) => {
    const newState = date ? date.toLocaleDateString("ru-RU") : "";
    switch (title) {
      case "Домашний арест":
        setHomeArrestValues((prevState) =>
          prevState.map((item) =>
            item.id === id ? { ...item, [field]: date } : item
          )
        );
        dispatch(
          updateHomeArrestValues({ id, newState: { [field]: newState } })
        );
        break;
      case "Срок содержания под стражей":
        setTimeUnderArrest((prevState) =>
          prevState.map((item) =>
            item.id === id ? { ...item, [field]: date } : item
          )
        );
        dispatch(
          updateTimeUnderArrestValues({ id, newState: { [field]: newState } })
        );
        break;
      case "Запрет определенных действий":
        setRejectingCurrentDoings((prevState) =>
          prevState.map((item) =>
            item.id === id ? { ...item, [field]: date } : item
          )
        );
        dispatch(
          updateRejectingCurrentDoingsValues({
            id,
            newState: { [field]: newState },
          })
        );
        break;
      default:
        break;
    }
  };

  const removeFiltrationComponentValue = (id: number, title: string) => {
    switch (title) {
      case "Домашний арест":
        if (homeArrestValues.length !== 1) {
          setHomeArrestValues(
            homeArrestValues.filter((value) => value.id !== id)
          );
          dispatch(removeHomeArrestValuesAction(id));
        }
        break;
      case "Срок содержания под стражей":
        if (timeUnderArrest.length !== 1) {
          setTimeUnderArrest(
            timeUnderArrest.filter((value) => value.id !== id)
          );
          dispatch(removeTimeUnderArrestAction(id));
        }
        break;
      case "Запрет определенных действий":
        if (rejectingCurrentDoings.length !== 1) {
          setRejectingCurrentDoings(
            rejectingCurrentDoings.filter((value) => value.id !== id)
          );
          dispatch(removeRejectingCurrentDoingsAction(id));
        }
        break;
      default:
        break;
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
    setUpdateFiltrationComponentValue,
    homeArrestValues,
    addFiltrationComponentValue,
    removeFiltrationComponentValue,
    timeUnderArrest,
    rejectingCurrentDoings,
  };
};
