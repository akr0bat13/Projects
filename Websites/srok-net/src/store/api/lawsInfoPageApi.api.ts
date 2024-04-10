import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

// import { Connection } from "../../../utils/enums/common.enums";
import { ConnectionInstance as Connection } from "src/utils/constants/connection";
import { ICalculatorInfo } from "src/utils/types/CalculatorFiltration.types";
import {
  ICalculatorResponce,
  LawsInfoResponse,
} from "src/utils/types/CalculatorResult.types";
import { IChargeArticleProps } from "src/utils/types/CalculatorSearch.types";

export const lawsInfoPageApi = createApi({
  reducerPath: "calculatorResultApi/api",
  baseQuery: fetchBaseQuery({
    baseUrl: Connection.REST_HOST,
  }),
  endpoints: (build) => ({
    updateLawsInfo: build.mutation<LawsInfoResponse, IChargeArticleProps[]>({
      query: (body) => ({
        url: "function/func_srok.php?api=laws-info",
        method: "POST",
        body,
      }),
    }),
    updateCalculatorInfo: build.mutation<ICalculatorResponce, ICalculatorInfo>({
      query: (body) => ({
        url: "function/func_srok.php?api=calculator",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useUpdateLawsInfoMutation, useUpdateCalculatorInfoMutation } =
  lawsInfoPageApi;
