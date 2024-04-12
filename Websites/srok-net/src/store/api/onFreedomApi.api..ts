import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { ConnectionInstance as Connection } from "src/utils/constants/connection";

export const onFreedomApi = createApi({
  reducerPath: "onFreedomApi/api",
  baseQuery: fetchBaseQuery({
    baseUrl: Connection.REST_HOST,
  }),
  endpoints: (build) => ({
    contactFormInfo: build.mutation<unknown, unknown>({
      query: (body) => ({
        url: "function/func_srok.php?api=report",
        method: "POST",
        body,
      }),
    }),
    contactFormSendMail: build.mutation<unknown, unknown>({
      query: (body) => ({
        url: "function/func_srok.php?api=sendmail",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useContactFormInfoMutation, useContactFormSendMailMutation } =
  onFreedomApi;
