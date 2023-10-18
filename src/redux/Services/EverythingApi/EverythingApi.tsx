import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { everything } from "../Endpoints";

interface GetEverythingDataProps {
  q?: string;
  from?: string;
  to?: string;
  language?: string;
  sortBy?: string;
  pageSize?: string;
}

export const everythingApi = createApi({
  reducerPath: "everythingApi",
  baseQuery: fetchBaseQuery({ baseUrl: everything }),
  endpoints: (builder) => ({
    getEverythingData: builder.query<
      LatestDataResponse,
      GetEverythingDataProps
    >({
      query: ({ q, from, to, language, sortBy, pageSize }) => {
        const params = new URLSearchParams({
          ...(q && { q }),
          ...(from && { from }),
          ...(to && { to }),
          ...(language && { language }),
          ...(sortBy && { sortBy }),
          ...(pageSize && { pageSize }),
        });

        return {
          url: `?${params.toString()}&apiKey=${process.env.REACT_APP_API_KEY}`,
          method: "GET",
        };
      },
    }),
  }),
});
export const { useGetEverythingDataQuery } = everythingApi;
