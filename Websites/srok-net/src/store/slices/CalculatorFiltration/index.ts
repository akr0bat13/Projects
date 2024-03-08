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
  years: "",
  month: "",
  apilationDate: null,
  detention: "",
};

const punishmentType: IFiltrationCheckBoxProps[] = [
  {
    title: "Колония поселения",
    value: false,
  },
  {
    title: "Колония общего режима",
    value: false,
  },
  {
    title: "Колония строгого режима",
    value: false,
  },
  {
    title: "Колония особого режима",
    value: false,
  },
  {
    title: "Принудительные трудовые работы",
    value: false,
  },
  {
    title: "Тюрьма",
    value: false,
  },
];

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
      state.homeArrest.isActive = action.payload;
    },
    toggleTimeUnderArrest: (state, action: PayloadAction<boolean>) => {
      state.timeUnderArrest.isActive = action.payload;
    },
    toggleRejectingCurrentDoings: (state, action: PayloadAction<boolean>) => {
      state.rejectingCurrentDoings.isActive = action.payload;
    },
    togglePunishmentType: (
      state,
      action: PayloadAction<{ title: string; value: boolean }>
    ) => {
      const { title, value } = action.payload;

      const updatedPunishmentType = state.punishmentType.map((item) => {
        if (item.title === title) {
          return { ...item, value };
        }
        return { ...item, value: false };
      });

      return {
        ...state,
        punishmentType: updatedPunishmentType,
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
    updateApilationDetention: (state, action: PayloadAction<string>) => {
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
} = slice.actions;

export const { reducer } = slice;
