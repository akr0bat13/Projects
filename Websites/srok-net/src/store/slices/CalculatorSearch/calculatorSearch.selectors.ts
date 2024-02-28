import { RootState } from "src/store/index";

export const calculatorSearchValues = (state: RootState) =>
  state.calculatorSearch;
export const calculatorSearchVerdictDate = (state: RootState) =>
  state.calculatorSearch.verdictDate;
export const calculatorSearchComesInToForse = (state: RootState) =>
  state.calculatorSearch.comesInToForse;
export const calculatorSearchSentenceValue = (state: RootState) =>
  state.calculatorSearch.sentence;
export const calculatorSearchChargeArticle = (state: RootState) =>
  state.calculatorSearch.chargeArticle;
