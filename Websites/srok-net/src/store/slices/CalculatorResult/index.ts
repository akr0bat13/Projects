import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  ICalculatorCrimeInfo,
  ICalculatorCrimeResult,
  ICalculatorData,
} from "src/utils/types/CalculatorResult.types";

const initialState: ICalculatorCrimeResult = {
  lawsInfo: [],
  calculatorInfo: {
    max_term: undefined,
    credit_period: undefined,
    release: {
      date: "",
      credit: undefined,
    },
    udo: {
      date: "",
      credit: undefined,
    },
    ptr: {
      date: "",
      credit: undefined,
    },
    itr: {
      date: "",
      credit: undefined,
    },
    colony: {
      date: "",
      credit: undefined,
    },
  },
};

const slice = createSlice({
  name: "calculatorResult",
  initialState,
  reducers: {
    toggleLawsInfo: (state, action: PayloadAction<ICalculatorCrimeInfo[]>) => {
      state.lawsInfo = action.payload;
    },
    toggleCalculatorInfo: (state, action: PayloadAction<ICalculatorData>) => {
      state.calculatorInfo = action.payload;
    },
  },
});

export const { toggleLawsInfo, toggleCalculatorInfo } = slice.actions;

export const { reducer } = slice;
