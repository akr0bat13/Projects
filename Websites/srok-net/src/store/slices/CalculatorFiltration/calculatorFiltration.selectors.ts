import { RootState } from "src/store/index";

export const calculatorFiltrationValues = (state: RootState) =>
  state.calculatorFiltration;

export const calculatorFiltrationPunishment = (state: RootState) =>
  state.calculatorFiltration.punishmentType;

export const calculatorFiltrationApilation = (state: RootState) =>
  state.calculatorFiltration.apilation;

export const calculatorFiltrationMeasure = (state: RootState) =>
  state.calculatorFiltration.preventiveMeasure;
