import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  IOnFreedomModalExtraSupport,
  IOnFreedomModalInputs,
  IOnFreedomModalValuablePrice,
  OnFreedomModalState,
} from "src/utils/types/OnFreedomModal.types";

const inputModalValue: IOnFreedomModalInputs = {
  contactInfo: "",
  useInform: "",
  periodic: "",
};
const valuablePrice: IOnFreedomModalValuablePrice = {
  defaultPrice: "1",
  willingToPay: "1",
};

const extraSupport: IOnFreedomModalExtraSupport = {
  supportVariants: "1",
  textField: "",
};

const initialState: OnFreedomModalState = {
  modalInputs: inputModalValue,
  valuablePrice,
  extraSupport,
  acceptTerms: false,
};

const slice = createSlice({
  name: "onFreedomModal",
  initialState,
  reducers: {
    updateOnFreedomModalContactInfo: (state, action: PayloadAction<string>) => {
      state.modalInputs.contactInfo = action.payload;
    },
    updateOnFreedomModalUseInform: (state, action: PayloadAction<string>) => {
      state.modalInputs.useInform = action.payload;
    },
    updateOnFreedomModalPeriodic: (state, action: PayloadAction<string>) => {
      state.modalInputs.periodic = action.payload;
    },
    updateOnFreedomModalDefaultPrice: (
      state,
      action: PayloadAction<string>
    ) => {
      state.valuablePrice.defaultPrice = action.payload;
    },
    updateOnFreedomModalWillingToPay: (
      state,
      action: PayloadAction<string>
    ) => {
      state.valuablePrice.willingToPay = action.payload;
    },
    updateOnFreedomModalSupportVariants: (
      state,
      action: PayloadAction<string>
    ) => {
      state.extraSupport.supportVariants = action.payload;
    },
    updateOnFreedomModalTextField: (state, action: PayloadAction<string>) => {
      state.extraSupport.textField = action.payload;
    },
    updateOnFreedomModalAcceptTerms: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.acceptTerms = action.payload;
    },
  },
});

export const {
  updateOnFreedomModalContactInfo,
  updateOnFreedomModalUseInform,
  updateOnFreedomModalPeriodic,
  updateOnFreedomModalDefaultPrice,
  updateOnFreedomModalWillingToPay,
  updateOnFreedomModalSupportVariants,
  updateOnFreedomModalTextField,
  updateOnFreedomModalAcceptTerms,
} = slice.actions;

export const { reducer } = slice;
