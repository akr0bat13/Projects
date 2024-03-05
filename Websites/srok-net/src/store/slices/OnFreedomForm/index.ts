import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  IOnFreedomModalInputs,
  IOnFreedomModalValuablePrice,
  OnFreedomModalState,
} from "src/utils/types/OnFreedomModal.types";

const inputModalValue: IOnFreedomModalInputs = {
  useInform: "",
  periodic: "",
};
const valuablePrice: IOnFreedomModalValuablePrice = {
  defaultPrice: "",
  willingToPay: "",
};

const initialState: OnFreedomModalState = {
  modalInputs: inputModalValue,
  valuablePrice,
};

const slice = createSlice({
  name: "onFreedomModal",
  initialState,
  reducers: {
    updateOnFreedomModalUseInform: (state, action: PayloadAction<string>) => {
      state.modalInputs.useInform = action.payload;
    },
    updateOnFreedomModalPeriodic: (state, action: PayloadAction<string>) => {
      state.modalInputs.periodic = action.payload;
    },
  },
});

export const { updateOnFreedomModalUseInform, updateOnFreedomModalPeriodic } =
  slice.actions;

export const { reducer } = slice;
