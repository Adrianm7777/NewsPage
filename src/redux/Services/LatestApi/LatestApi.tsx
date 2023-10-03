import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { topHeadlines } from "../Endpoints";

interface GetLatestDataProps {
  country?: string;
  category?: string;
  pageSize?: string;
}

export const latestApi = createApi({
  reducerPath: "latestApi",
  baseQuery: fetchBaseQuery({ baseUrl: topHeadlines }),
  endpoints: (builder) => ({
    getLatestData: builder.query<LatestDataResponse, GetLatestDataProps>({
      query: ({ country, category, pageSize }) => {
        const params = new URLSearchParams({
          ...(country && { country }),
          ...(category && { category }),
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

export const { useGetLatestDataQuery } = latestApi;
