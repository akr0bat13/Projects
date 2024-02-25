import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  ICalculatorState,
  IChargeArticleProps,
  ISentenceProps,
} from "src/utils/types/Calculator.types";

const sentenceValue: ISentenceProps = {
  year: "",
  month: "",
};

const chargeArticleValue: IChargeArticleProps[] = [
  {
    id: 1,
    part: "",
    state: "",
    episodesNumber: 0,
    isActive: true,
  },
];

const initialState: ICalculatorState = {
  verdictDate: null,
  comesInToForse: null,
  sentence: sentenceValue,
  chargeArticle: chargeArticleValue,
};

const slice = createSlice({
  name: "createCalculator",
  initialState,
  reducers: {
    updateCalculatorVerdictDate: (
      state,
      action: PayloadAction<Date | null>
    ) => {
      state.verdictDate = action.payload;
    },
    updateCalculatorComesInToForse: (
      state,
      action: PayloadAction<Date | null>
    ) => {
      state.comesInToForse = action.payload;
    },
    updateCalculatorSentenceYear: (state, action: PayloadAction<string>) => {
      state.sentence.year = action.payload;
    },
    updateCalculatorSentenceMonth: (state, action: PayloadAction<string>) => {
      state.sentence.month = action.payload;
    },
    updateChargeArticle: (
      state,
      action: PayloadAction<{
        index: number;
        chargeArticle: IChargeArticleProps;
      }>
    ) => {
      const { index, chargeArticle } = action.payload;
      state.chargeArticle[index] = chargeArticle;
    },

    // addChargeArticle: (state) => {
    //   if (state.chargeArticle.length === 0) {
    //     state.chargeArticle.push(chargeArticleValue);
    //   } else {
    //     const newChargeArticle: IChargeArticleProps = {
    //       state: "",
    //       part: "",
    //       episodesNumber: 0,
    //     };
    //     state.chargeArticle.push(newChargeArticle);
    //   }
    // },

    removeChargeArticle: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.chargeArticle.splice(index, 1);
    },
  },
});

export const {
  updateCalculatorVerdictDate,
  updateCalculatorComesInToForse,
  updateCalculatorSentenceYear,
  updateCalculatorSentenceMonth,
  updateChargeArticle,
  removeChargeArticle,
  // addChargeArticle,
} = slice.actions;

export const { reducer } = slice;
