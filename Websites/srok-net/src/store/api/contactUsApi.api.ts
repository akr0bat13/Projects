import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { ConnectionInstance as Connection } from "src/utils/constants/connection";
import { IContactUsState } from "src/utils/types/ContactUsModal.types";

export const contactUsApi = createApi({
  reducerPath: "contactUsApi/api",
  baseQuery: fetchBaseQuery({
    baseUrl: Connection.REST_HOST,
  }),
  endpoints: (build) => ({
    contactUs: build.mutation<unknown, IContactUsState>({
      query: (body) => ({
        url: "function/func_srok.php?api=contact-us",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useContactUsMutation } = contactUsApi;
