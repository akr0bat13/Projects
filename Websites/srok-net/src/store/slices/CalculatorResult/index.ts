import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  ICalculatorCrimeInfo,
  ICalculatorCrimeResult,
} from "src/utils/types/CalculatorResult.types";

const initialState: ICalculatorCrimeResult = {
  lawsInfo: [],
  calculatorInfo: [],
};

const slice = createSlice({
  name: "calculatorResult",
  initialState,
  reducers: {
    toggleLawsInfo: (state, action: PayloadAction<ICalculatorCrimeInfo[]>) => {
      state.lawsInfo = action.payload;
    },
    toggleCalculatorInfo: (state, action: PayloadAction<unknown>) => {
      state.calculatorInfo = action.payload;
    },
  },
});

export const { toggleLawsInfo, toggleCalculatorInfo } = slice.actions;

export const { reducer } = slice;
