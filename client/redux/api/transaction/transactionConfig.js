import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { VPN_IP } from '@env'

const baseQuery = fetchBaseQuery({ 
    baseUrl: `http://${VPN_IP}:8080/api/transactions`,
    credentials: 'include'
})

export const transactionSlice = createApi({
    reducerPath: "api/transactions",
    baseQuery: baseQuery,
    endpoints: builder => ({})
})