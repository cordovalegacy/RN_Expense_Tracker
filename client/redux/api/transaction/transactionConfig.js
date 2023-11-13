import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ 
    baseUrl: `http://localhost:8080/api/transactions`,
    credentials: 'include'
})

export const transactionSlice = createApi({
    reducerPath: "api/transactions",
    baseQuery: baseQuery,
    endpoints: builder => ({})
})