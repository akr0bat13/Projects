import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  IApilationProps,
  ICalculatorFiltrationState,
  IFiltrationCheckBoxProps,
} from "src/utils/types/CalculatorFiltration.types";

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
  name: "createCalculatorFiltration",
  initialState,
  reducers: {
    togglePreventiveMeasure: (
      state,
      action: PayloadAction<{ title: string; value: boolean }>
    ) => {
      const { title, value } = action.payload;
      const measure = state.preventiveMeasure.find(
        (item) => item.title === title
      );
      if (measure) {
        measure.value = value;
      }
    },
    togglePunishmentType: (
      state,
      action: PayloadAction<{ title: string; value: boolean }>
    ) => {
      const { title, value } = action.payload;
      const type = state.punishmentType.find((item) => item.title === title);
      if (type) {
        type.value = value;
      }
    },
    updateApilationDate: (state, action: PayloadAction<Date | null>) => {
      state.apilation.apilationDate = action.payload;
    },
    updateApilationYear: (state, action: PayloadAction<string>) => {
      state.apilation.years = action.payload;
    },
    updateApilationMonth: (state, action: PayloadAction<string>) => {
      state.apilation.month = action.payload;
    },
    updateApilationDetention: (state, action: PayloadAction<string>) => {
      state.apilation.detention = action.payload;
    },
  },
});

export const {
  togglePreventiveMeasure,
  togglePunishmentType,
  updateApilationDate,
  updateApilationMonth,
  updateApilationYear,
  updateApilationDetention,
} = slice.actions;

export const { reducer } = slice;
