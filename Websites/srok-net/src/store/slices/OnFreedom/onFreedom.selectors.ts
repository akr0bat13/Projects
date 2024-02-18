import { RootState } from "src/store/index";

export const onFreedomInputs = (state: RootState) =>
  state.onFreedom.inputsValue;
export const selectedCity = (state: RootState) => state.onFreedom.selectedCity;
