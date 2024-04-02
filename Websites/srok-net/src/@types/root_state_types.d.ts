import { BaseQueryFn } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {
  FetchArgs,
  FetchBaseQueryArgs,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/dist/query/fetchBaseQuery";
import "react-redux";

import { AppReducer } from "../store/rootReducer";
import { CustomError } from "../utils/types/api.types";

declare module "react-redux" {
  type DefaultRootState = AppReducer;
}

declare module "@reduxjs/toolkit/query" {
  function fetchBaseQuery({
    baseUrl,
    prepareHeaders,
    fetchFn,
    paramsSerializer,
    isJsonContentType,
    jsonContentType,
    jsonReplacer,
    timeout: defaultTimeout,
    validateStatus: globalValidateStatus,
    ...baseFetchOptions
  }?: FetchBaseQueryArgs): BaseQueryFn<
    string | FetchArgs,
    unknown,
    CustomError,
    object,
    FetchBaseQueryMeta
  >;
}
