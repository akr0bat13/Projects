import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TOption } from "src/components/UI/Select/Select";
import { IInputProps, OnFreedomState } from "src/utils/types/OnFreedom.types";

// import { IForms } from "src/utils/types/OnFreedom.types";

// const inputFormsValue: IForms = {
//   title: "",
//   inputsContent: [],
// };

const inputSearchValue = {
  state: "",
  part: "",
};

const initialState: OnFreedomState = {
  inputsValue: inputSearchValue,
  selectedCity: {
    label: "Москва",
    value: "Москва",
  },
};

const slice = createSlice({
  name: "createPoolMaster",
  initialState,
  reducers: {
    updateOnFreedomInputs: (state, action: PayloadAction<IInputProps>) => {
      state.inputsValue = action.payload;
    },
    updateSelectedCity: (state, action: PayloadAction<TOption>) => {
      state.selectedCity = action.payload;
    },
  },
});

export const { updateOnFreedomInputs, updateSelectedCity } = slice.actions;

export const { reducer } = slice;
