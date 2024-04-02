import { combineReducers } from "@reduxjs/toolkit";

import { lawsInfoPageApi } from "./api/lawsInfoPageApi.api";
import { reducer as calculatorFiltrationReducers } from "./slices/CalculatorFiltration";
import { reducer as calculatorSearchReducers } from "./slices/CalculatorSearch";
import { reducer as onFreedomReducers } from "./slices/OnFreedom";
import { reducer as onFreedomModalReducers } from "./slices/OnFreedomForm";
import { reducer as helperSlicesReducer } from "./slices/helperSlices";
import { reducer as isMobileReducer } from "./slices/isMobile";

const rootReducer = combineReducers({
  onFreedom: onFreedomReducers,
  calculatorSearch: calculatorSearchReducers,
  calculatorFiltration: calculatorFiltrationReducers,
  onFreedomModal: onFreedomModalReducers,
  isMobile: isMobileReducer,
  helperSlices: helperSlicesReducer,
  [lawsInfoPageApi.reducerPath]: lawsInfoPageApi.reducer,
});

export default rootReducer;
export type AppReducer = ReturnType<typeof rootReducer>;
