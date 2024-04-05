import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

// import { Connection } from "../../../utils/enums/common.enums";
import { ConnectionInstance as Connection } from "src/utils/constants/connection";
import { LawsInfoResponse } from "src/utils/types/CalculatorResult.types";
import { IChargeArticleProps } from "src/utils/types/CalculatorSearch.types";

export const lawsInfoPageApi = createApi({
  reducerPath: "lawsInfoPageApi/api",
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
  }),
});

export const { useUpdateLawsInfoMutation } = lawsInfoPageApi;
