import { PreloadedState, configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";

import { lawsInfoPageApi } from "./api/lawsInfoPageApi.api";
import rootReducer from "./rootReducer";

export type RootReducerState = ReturnType<typeof rootReducer>;
export const middlewares = [lawsInfoPageApi.middleware];

export const setupStore = (
  preloadedState?: PreloadedState<RootReducerState>
) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
    preloadedState,
  });
};

const store = setupStore();

export default store;

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore["dispatch"];
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
