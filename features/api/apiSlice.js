import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://silver-backend-demo.onrender.com",
  }),
  tagTypes: ["User", "Messages"],
  endpoints: (builder) => ({}),
});
