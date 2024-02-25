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
    updateChargeArticleState: (
      state,
      action: PayloadAction<{ id: number; newState: string }>
    ) => {
      state.chargeArticle = state.chargeArticle.map((article) =>
        article.id === action.payload.id
          ? { ...article, state: action.payload.newState }
          : article
      );
    },
    updateChargeArticlePart: (
      state,
      action: PayloadAction<{ id: number; newPart: string }>
    ) => {
      state.chargeArticle = state.chargeArticle.map((article) =>
        article.id === action.payload.id
          ? { ...article, part: action.payload.newPart }
          : article
      );
    },
    updateChargeArticleEpisodesNumber: (
      state,
      action: PayloadAction<{ id: number; newEpisodesNumber: number }>
    ) => {
      state.chargeArticle = state.chargeArticle.map((article) =>
        article.id === action.payload.id
          ? { ...article, episodesNumber: action.payload.newEpisodesNumber }
          : article
      );
    },
    addChargeArticleAction: (
      state,
      action: PayloadAction<IChargeArticleProps>
    ) => {
      state.chargeArticle.push(action.payload);
    },
    removeChargeArticleAction: (state, action: PayloadAction<number>) => {
      state.chargeArticle = state.chargeArticle.filter(
        (article) => article.id !== action.payload
      );
    },
  },
});

export const {
  updateCalculatorVerdictDate,
  updateCalculatorComesInToForse,
  updateCalculatorSentenceYear,
  updateCalculatorSentenceMonth,
  addChargeArticleAction,
  updateChargeArticleEpisodesNumber,
  updateChargeArticlePart,
  updateChargeArticleState,
  removeChargeArticleAction,
} = slice.actions;

export const { reducer } = slice;
