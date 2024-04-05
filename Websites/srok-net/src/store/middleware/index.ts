import { Middleware } from "@reduxjs/toolkit";

export const socketMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    switch (action.type) {
      default:
        return next(action);
    }
  };
