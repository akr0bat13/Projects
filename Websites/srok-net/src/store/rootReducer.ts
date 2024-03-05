import { combineReducers } from "@reduxjs/toolkit";

import { reducer as calculatorFiltrationReducers } from "./slices/CalculatorFiltration";
import { reducer as calculatorSearchReducers } from "./slices/CalculatorSearch";
import { reducer as onFreedomReducers } from "./slices/OnFreedom";
import { reducer as onFreedomModalReducers } from "./slices/OnFreedomForm";

const rootReducer = combineReducers({
  onFreedom: onFreedomReducers,
  calculatorSearch: calculatorSearchReducers,
  calculatorFiltration: calculatorFiltrationReducers,
  onFreedomModal: onFreedomModalReducers,
});

export default rootReducer;
export type AppReducer = ReturnType<typeof rootReducer>;
