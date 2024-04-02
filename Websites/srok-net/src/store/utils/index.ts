import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query/fetchBaseQuery";

export const isFetchBaseQueryError = (
  error: unknown
): error is FetchBaseQueryError => {
  return typeof error === "object" && error !== null && "status" in error;
};
