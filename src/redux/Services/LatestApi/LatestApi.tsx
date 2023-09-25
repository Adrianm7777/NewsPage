import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GetLatestDataProps {
  country?: string;
  category?: string;
}

export const latestApi = createApi({
  reducerPath: "latestApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2/" }),
  endpoints: (builder) => ({
    getLatestData: builder.query<LatestDataResponse, GetLatestDataProps>({
      query: ({ country, category }) => {
        const params = new URLSearchParams({
          ...(country && { country }),
          ...(category && { category }),
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
