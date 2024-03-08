import { RootState } from "src/store/index";

export const calculatorFiltrationValues = (state: RootState) =>
  state.calculatorFiltration;

export const calculatorFiltrationPunishment = (state: RootState) =>
  state.calculatorFiltration.punishmentType;

export const calculatorFiltrationApilation = (state: RootState) =>
  state.calculatorFiltration.apilation;

export const calculatorHomeArrest = (state: RootState) =>
  state.calculatorFiltration.homeArrest;

export const calculatorTimeUnderArrest = (state: RootState) =>
  state.calculatorFiltration.timeUnderArrest;

export const calculatorRejectingCurrentDoings = (state: RootState) =>
  state.calculatorFiltration.rejectingCurrentDoings;
