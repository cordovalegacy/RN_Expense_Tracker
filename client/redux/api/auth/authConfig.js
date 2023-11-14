import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { VPN_IP } from '@env'

const baseQuery = fetchBaseQuery({ 
    baseUrl: `http://${VPN_IP}:8080/api/users`,
    credentials: 'include'
})

export const authSlice = createApi({
    reducerPath: "api/users",
    baseQuery: baseQuery,
    endpoints: builder => ({})
})