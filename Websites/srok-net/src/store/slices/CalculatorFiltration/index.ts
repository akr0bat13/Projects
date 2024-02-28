import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  IApilationProps,
  ICalculatorFiltrationState,
  IPreventiveMeasureProps,
  IPunishmentTypeProps,
} from "src/utils/types/CalculatorFiltration.types";

import {} from "src/utils/types/CalculatorSearch.types";

const preventiveMeasure: IPreventiveMeasureProps[] = [
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

const punishmentType: IPunishmentTypeProps = {
  settlementsColony: false,
  generalRegimeColony: false,
  maximumSecurityColony: false,
  specialRegimeColony: false,
  forcedLabor: false,
  prison: false,
};

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
