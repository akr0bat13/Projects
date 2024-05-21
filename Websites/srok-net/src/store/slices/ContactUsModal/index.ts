import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IContactUsState } from "src/utils/types/ContactUsModal.types";

const initialState: IContactUsState = {
  themeValue: 1,
  textInput: "",
  contactData: "",
};

const slice = createSlice({
  name: "contactUsModal",
  initialState,
  reducers: {
    updateContactUsModalTheme: (state, action: PayloadAction<number>) => {
      state.themeValue = action.payload;
    },
    updateContactUsModalTextField: (state, action: PayloadAction<string>) => {
      state.textInput = action.payload;
    },
    updateContactUsModalData: (state, action: PayloadAction<string>) => {
      state.contactData = action.payload;
    },
  },
});

export const {
  updateContactUsModalTheme,
  updateContactUsModalTextField,
  updateContactUsModalData,
} = slice.actions;

export const { reducer } = slice;
