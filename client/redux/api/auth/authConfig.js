import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ 
    baseUrl: `http://localhost:8080/api/users`,
    credentials: 'include'
})

export const authSlice = createApi({
    reducerPath: "api/users",
    baseQuery: baseQuery,
    endpoints: builder => ({})
})