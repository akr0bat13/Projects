import { RootState } from "src/store/index";

export const calculatorVerdictDate = (state: RootState) =>
  state.calculator.verdictDate;
export const calculatorComesInToForse = (state: RootState) =>
  state.calculator.comesInToForse;
export const calculatorSentenceValue = (state: RootState) =>
  state.calculator.sentence;
export const calculatorChargeArticle = (state: RootState) =>
  state.calculator.chargeArticle;
