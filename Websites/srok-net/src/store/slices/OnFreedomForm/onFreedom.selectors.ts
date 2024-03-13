import { RootState } from "src/store/index";

export const onFreedomModal = (state: RootState) => state.onFreedomModal;
export const onFreedomModalInput = (state: RootState) =>
  state.onFreedomModal.modalInputs;
export const onFreedomModalPrice = (state: RootState) =>
  state.onFreedomModal.valuablePrice;
export const onFreedomExtraSupport = (state: RootState) =>
  state.onFreedomModal.extraSupport;
