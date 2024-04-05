import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  ICalculatorCrimeInfo,
  ICalculatorCrimeResult,
} from "src/utils/types/CalculatorResult.types";

const initialState: ICalculatorCrimeResult = {
  lawsInfo: [],
};

const slice = createSlice({
  name: "calculatorResult",
  initialState,
  reducers: {
    toggleLawsInfo: (state, action: PayloadAction<ICalculatorCrimeInfo[]>) => {
      state.lawsInfo = action.payload;
    },
  },
});

export const { toggleLawsInfo } = slice.actions;

export const { reducer } = slice;
