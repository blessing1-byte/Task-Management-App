import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./../constant";

export const apiSlice = createApi({
  name: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["user", "task"],
  endpoints: (builder) => ({}),
});

//name, baseQuery, tagTypes, endpoints
