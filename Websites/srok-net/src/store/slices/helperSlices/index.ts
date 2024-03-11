import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const showContent = {
  showResult: false,
};

const initialState = {
  showContent,
};

const slice = createSlice({
  name: "helperSlices",
  initialState,
  reducers: {
    showCalculatorResult: (state, action: PayloadAction<boolean>) => {
      state.showContent.showResult = action.payload;
    },
  },
});

export const { showCalculatorResult } = slice.actions;

export const { reducer } = slice;
