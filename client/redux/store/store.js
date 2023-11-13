
// !Packages
import { configureStore } from '@reduxjs/toolkit'

// !Slices
// *APIs
import { authSlice } from '../api/auth/authConfig'
import { transactionSlice } from '../api/transaction/transactionConfig'
// *Reducers
import authReducer from '../reducer/authSlice'
import transactionReducer from '../reducer/transactionSlice'

export const store = configureStore({
    reducer: {
        [authSlice.reducerPath]: authSlice.reducer,
        [transactionSlice.reducerPath]: transactionSlice.reducer,
        auth: authReducer,
        transaction: transactionReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(authSlice.middleware, transactionSlice.middleware),
        devTools: process.env.NODE_ENV !== 'production'
})