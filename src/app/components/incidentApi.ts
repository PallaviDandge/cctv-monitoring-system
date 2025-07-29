import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const incidentsApi = createApi({
  reducerPath: 'incidentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getIncidents: builder.query({
      query: () => 'incidents',
    }),
  }),
});

export const { useGetIncidentsQuery } = incidentsApi;
