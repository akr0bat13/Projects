import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TOption } from "src/components/UI/Select/Select";
import { OnFreedomState } from "src/utils/types/OnFreedom.types";

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
    label: "",
    value: "",
  },
};

const slice = createSlice({
  name: "createOnFreedom",
  initialState,
  reducers: {
    updateOnFreedomInputState: (state, action: PayloadAction<string>) => {
      state.inputsValue.state = action.payload;
    },
    updateOnFreedomInputPart: (state, action: PayloadAction<string>) => {
      state.inputsValue.part = action.payload;
    },
    updateSelectedCity: (state, action: PayloadAction<TOption>) => {
      state.selectedCity = action.payload;
    },
  },
});

export const {
  updateOnFreedomInputPart,
  updateOnFreedomInputState,
  updateSelectedCity,
} = slice.actions;

export const { reducer } = slice;
