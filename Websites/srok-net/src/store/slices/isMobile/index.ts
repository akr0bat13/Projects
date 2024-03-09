import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

interface IMobileState {
  active: boolean;
}

const initialState: IMobileState = {
  active: false,
};

const slice = createSlice({
  name: "isMobile",
  initialState,
  reducers: {
    checkIsMobile: (state, action: PayloadAction<boolean>) => {
      state.active = action.payload;
    },
  },
});

export const { checkIsMobile } = slice.actions;
export const { reducer } = slice;
