import { combineReducers } from "@reduxjs/toolkit";

import { contactUsApi } from "./api/contactUsApi.api";
import { lawsInfoPageApi } from "./api/lawsInfoPageApi.api";
import { onFreedomApi } from "./api/onFreedomApi.api.";
import { reducer as calculatorFiltrationReducers } from "./slices/CalculatorFiltration";
import { reducer as calculatorResultReducer } from "./slices/CalculatorResult";
import { reducer as calculatorSearchReducers } from "./slices/CalculatorSearch";
import { reducer as contactUsModalReducers } from "./slices/ContactUsModal";
import { reducer as onFreedomReducers } from "./slices/OnFreedom";
import { reducer as onFreedomModalReducers } from "./slices/OnFreedomForm";
import { reducer as helperSlicesReducer } from "./slices/helperSlices";
import { reducer as isMobileReducer } from "./slices/isMobile";

const rootReducer = combineReducers({
  onFreedom: onFreedomReducers,
  calculatorSearch: calculatorSearchReducers,
  calculatorFiltration: calculatorFiltrationReducers,
  onFreedomModal: onFreedomModalReducers,
  contactUsModal: contactUsModalReducers,
  isMobile: isMobileReducer,
  helperSlices: helperSlicesReducer,
  calculatorResult: calculatorResultReducer,
  [lawsInfoPageApi.reducerPath]: lawsInfoPageApi.reducer,
  [onFreedomApi.reducerPath]: onFreedomApi.reducer,
  [contactUsApi.reducerPath]: contactUsApi.reducer,
});

export default rootReducer;
export type AppReducer = ReturnType<typeof rootReducer>;
