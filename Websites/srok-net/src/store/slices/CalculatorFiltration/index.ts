import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  IApilationProps,
  ICalculatorFiltrationState,
  IFiltrationCheckBoxProps,
} from "src/utils/types/CalculatorFiltration.types";

import {} from "src/utils/types/CalculatorSearch.types";

const preventiveMeasure: IFiltrationCheckBoxProps[] = [
  {
    title: "Домашний арест",
    value: false,
  },
  {
    title: "Срок содержания под стражей",
    value: false,
  },
  {
    title: "Запрет определенных действий",
    value: false,
  },
];

const apilation: IApilationProps = {
  years: "",
  month: "",
  apilationDate: null,
  detention: "",
};

const punishmentType: IFiltrationCheckBoxProps[] = [
  {
    title: "Колония поселения",
    value: false,
  },
  {
    title: "Колония общего режима",
    value: false,
  },
  {
    title: "Колония строгого режима",
    value: false,
  },
  {
    title: "Колония особого режима",
    value: false,
  },
  {
    title: "Принудительные трудовые работы",
    value: false,
  },
  {
    title: "Тюрьма",
    value: false,
  },
];

const initialState: ICalculatorFiltrationState = {
  preventiveMeasure,
  apilation,
  punishmentType,
};

const slice = createSlice({
  name: "createCalculatorSearch",
  initialState,
  reducers: {
    updateApilationYears: (state, action: PayloadAction<string>) => {
      state.apilation.years = action.payload;
    },
  },
});

export const { updateApilationYears } = slice.actions;

export const { reducer } = slice;
