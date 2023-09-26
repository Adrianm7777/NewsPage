import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LatestNewsUrl } from "../Endpoints";

interface GetLatestDataProps {
  country?: string;
  category?: string;
  pageSize?: string;
}

export const latestApi = createApi({
  reducerPath: "latestApi",
  baseQuery: fetchBaseQuery({ baseUrl: LatestNewsUrl }),
  endpoints: (builder) => ({
    getLatestData: builder.query<LatestDataResponse, GetLatestDataProps>({
      query: ({ country, category, pageSize }) => {
        const params = new URLSearchParams({
          ...(country && { country }),
          ...(category && { category }),
          ...(pageSize && { pageSize }),
        });

        return {
          url: `top-headlines?${params.toString()}&apiKey=${
            process.env.REACT_APP_API_KEY
          }`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetLatestDataQuery } = latestApi;
