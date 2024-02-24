import { combineReducers } from "@reduxjs/toolkit";

import { reducer as calculatorReducers } from "./slices/MainPage";
import { reducer as onFreedomReducers } from "./slices/OnFreedom";

const rootReducer = combineReducers({
  onFreedom: onFreedomReducers,
  calculator: calculatorReducers,
});

export default rootReducer;
export type AppReducer = ReturnType<typeof rootReducer>;
