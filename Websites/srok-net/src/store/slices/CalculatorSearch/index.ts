import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  ICalculatorState,
  IChargeArticleProps,
  ISentenceProps,
} from "src/utils/types/CalculatorSearch.types";

const sentenceValue: ISentenceProps = {
  year: "",
  month: "",
};

const chargeArticleValue: IChargeArticleProps[] = [
  {
    id: 1,
    state: "",
    part: "",
    episodesNumber: "1",
  },
];

const initialState: ICalculatorState = {
  verdictDate: null,
  comesInToForse: null,
  sentence: sentenceValue,
  chargeArticle: chargeArticleValue,
  conviction: false,
};

const slice = createSlice({
  name: "createCalculatorSearch",
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

    addChargeArticleAction: (
      state,
      action: PayloadAction<IChargeArticleProps>
    ) => {
      state.chargeArticle.push(action.payload);
    },
    removeChargeArticleAction: (state, action: PayloadAction<number>) => {
      const updatedChargeArticle = (state.chargeArticle =
        state.chargeArticle.filter((article) => article.id !== action.payload));
      const updatedChargeArticleWithUpdatedIds = updatedChargeArticle.map(
        (article, index) => ({
          ...article,
          id: index + 1,
        })
      );

      state.chargeArticle = updatedChargeArticleWithUpdatedIds;
    },

    updateChargeArticleAction: (
      state,
      action: PayloadAction<{
        id: number;
        newState: {
          state?: string;
          part?: string;
          episodesNumber?: string;
        };
      }>
    ) => {
      const updatedChargeArticle = state.chargeArticle.map((article) => {
        if (article.id === action.payload.id) {
          return {
            ...article,
            ...action.payload.newState,
          };
        }
        return article;
      });

      return {
        ...state,
        chargeArticle: updatedChargeArticle,
      };
    },

    updateConviction: (state, action: PayloadAction<boolean>) => {
      state.conviction = action.payload;
    },
  },
});

export const {
  updateCalculatorVerdictDate,
  updateCalculatorComesInToForse,
  updateCalculatorSentenceYear,
  updateCalculatorSentenceMonth,
  addChargeArticleAction,
  removeChargeArticleAction,
  updateChargeArticleAction,
  updateConviction,
} = slice.actions;

export const { reducer } = slice;
