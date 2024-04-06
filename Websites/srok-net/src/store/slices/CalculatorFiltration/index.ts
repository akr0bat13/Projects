import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  IApilationProps,
  ICalculatorFiltrationState,
  IFiltrationCheckBoxProps,
  IFiltrationDate,
  IFiltrationSelectProps,
} from "src/utils/types/CalculatorFiltration.types";

const homeArrest: IFiltrationSelectProps = {
  title: "Домашний арест",
  isActive: false,
  values: [
    {
      id: 1,
      start: null,
      end: null,
    },
  ],
};
const timeUnderArrest: IFiltrationSelectProps = {
  title: "Срок содержания под стражей",
  isActive: false,
  values: [
    {
      id: 1,
      start: null,
      end: null,
    },
  ],
};
const rejectingCurrentDoings: IFiltrationSelectProps = {
  title: "Запрет определенных действий",
  isActive: false,
  values: [
    {
      id: 1,
      start: null,
      end: null,
    },
  ],
};

const apilation: IApilationProps = {
  isActive: false,
  years: "",
  month: "",
  apilationDate: null,
  detention: null,
};

const punishmentType: IFiltrationCheckBoxProps = {
  title: "",
  value: 0,
  isActive: false,
};

const initialState: ICalculatorFiltrationState = {
  homeArrest,
  timeUnderArrest,
  rejectingCurrentDoings,
  apilation,
  punishmentType,
};

const slice = createSlice({
  name: "createCalculatorFiltration",
  initialState,
  reducers: {
    toggleHomeArrest: (state, action: PayloadAction<boolean>) => {
      state.homeArrest = {
        ...homeArrest,
        isActive: action.payload,
      };
    },
    toggleTimeUnderArrest: (state, action: PayloadAction<boolean>) => {
      state.timeUnderArrest = {
        ...timeUnderArrest,
        isActive: action.payload,
      };
    },
    toggleRejectingCurrentDoings: (state, action: PayloadAction<boolean>) => {
      state.rejectingCurrentDoings = {
        ...rejectingCurrentDoings,
        isActive: action.payload,
      };
    },

    togglePunishmentType: (
      state,
      action: PayloadAction<{
        item: IFiltrationCheckBoxProps;
        isActive: boolean;
      }>
    ) => {
      const { item, isActive } = action.payload;
      state.punishmentType = {
        ...item,
        isActive,
      };
    },
    toggleApilationDate: (state, action: PayloadAction<boolean>) => {
      state.apilation = {
        ...apilation,
        isActive: action.payload,
      };
    },
    updateApilationDate: (state, action: PayloadAction<Date | null>) => {
      state.apilation.apilationDate = action.payload;
    },
    updateApilationYear: (state, action: PayloadAction<string>) => {
      state.apilation.years = action.payload;
    },
    updateApilationMonth: (state, action: PayloadAction<string>) => {
      state.apilation.month = action.payload;
    },
    updateApilationDetention: (state, action: PayloadAction<number>) => {
      state.apilation.detention = action.payload;
    },
    removeHomeArrestValuesAction: (state, action: PayloadAction<number>) => {
      const updatedArrestValues = (state.homeArrest.values =
        state.homeArrest.values.filter((value) => value.id !== action.payload));
      const updatedArrestValuesWithUpdatedIds = updatedArrestValues.map(
        (value, index) => ({
          ...value,
          id: index + 1,
        })
      );

      state.homeArrest.values = updatedArrestValuesWithUpdatedIds;
    },

    addHomeArrestValuesAction: (
      state,
      action: PayloadAction<IFiltrationDate>
    ) => {
      state.homeArrest.values.push(action.payload);
    },

    updateHomeArrestValues: (
      state,
      action: PayloadAction<{
        id: number;
        newState: {
          start?: Date | null;
          end?: Date | null;
        };
      }>
    ) => {
      const updateHomeArrest = state.homeArrest.values.map((value) => {
        if (value.id === action.payload.id) {
          return {
            ...value,
            ...action.payload.newState,
          };
        }
        return value;
      });

      return {
        ...state,
        homeArrest: {
          ...state.homeArrest,
          values: updateHomeArrest,
        },
      };
    },
    removeTimeUnderArrestAction: (state, action: PayloadAction<number>) => {
      const updatedTimeUnderArrest = (state.timeUnderArrest.values =
        state.timeUnderArrest.values.filter(
          (value) => value.id !== action.payload
        ));
      const updatedTimeUnderArrestWithUpdatedIds = updatedTimeUnderArrest.map(
        (value, index) => ({
          ...value,
          id: index + 1,
        })
      );

      state.timeUnderArrest.values = updatedTimeUnderArrestWithUpdatedIds;
    },

    addTimeUnderArrestAction: (
      state,
      action: PayloadAction<IFiltrationDate>
    ) => {
      state.timeUnderArrest.values.push(action.payload);
    },

    updateTimeUnderArrestValues: (
      state,
      action: PayloadAction<{
        id: number;
        newState: {
          start?: Date | null;
          end?: Date | null;
        };
      }>
    ) => {
      const updateTimeUnderArrest = state.timeUnderArrest.values.map(
        (value) => {
          if (value.id === action.payload.id) {
            return {
              ...value,
              ...action.payload.newState,
            };
          }
          return value;
        }
      );

      return {
        ...state,
        timeUnderArrest: {
          ...state.timeUnderArrest,
          values: updateTimeUnderArrest,
        },
      };
    },
    removeRejectingCurrentDoingsAction: (
      state,
      action: PayloadAction<number>
    ) => {
      const rejectingCurrentDoings = (state.rejectingCurrentDoings.values =
        state.rejectingCurrentDoings.values.filter(
          (value) => value.id !== action.payload
        ));
      const updatedRejectingCurrentDoingsWithUpdatedIds =
        rejectingCurrentDoings.map((value, index) => ({
          ...value,
          id: index + 1,
        }));

      state.rejectingCurrentDoings.values =
        updatedRejectingCurrentDoingsWithUpdatedIds;
    },

    addRejectingCurrentDoingsAction: (
      state,
      action: PayloadAction<IFiltrationDate>
    ) => {
      state.rejectingCurrentDoings.values.push(action.payload);
    },

    updateRejectingCurrentDoingsValues: (
      state,
      action: PayloadAction<{
        id: number;
        newState: {
          start?: Date | null;
          end?: Date | null;
        };
      }>
    ) => {
      const rejectingDoings = state.rejectingCurrentDoings.values.map(
        (value) => {
          if (value.id === action.payload.id) {
            return {
              ...value,
              ...action.payload.newState,
            };
          }
          return value;
        }
      );

      return {
        ...state,
        rejectingCurrentDoings: {
          ...state.rejectingCurrentDoings,
          values: rejectingDoings,
        },
      };
    },
  },
});

export const {
  togglePunishmentType,
  updateApilationDate,
  updateApilationMonth,
  updateApilationYear,
  updateApilationDetention,
  toggleHomeArrest,
  toggleTimeUnderArrest,
  toggleRejectingCurrentDoings,
  updateHomeArrestValues,
  addHomeArrestValuesAction,
  removeHomeArrestValuesAction,
  updateTimeUnderArrestValues,
  removeTimeUnderArrestAction,
  addTimeUnderArrestAction,
  addRejectingCurrentDoingsAction,
  removeRejectingCurrentDoingsAction,
  updateRejectingCurrentDoingsValues,
  toggleApilationDate,
} = slice.actions;

export const { reducer } = slice;
