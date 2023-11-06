
// !Packages
import { Provider } from "react-redux"
import { configureStore } from '@reduxjs/toolkit'

// !Slices
// *APIs
import { authSlice } from '../redux/api/auth/authConfig'
import { transactionSlice } from '../redux/api/transaction/transactionConfig'
// *Reducers
import authReducer from '../redux/reducer/authSlice'
import transactionReducer from '../redux/reducer/transactionSlice'

const ReduxProvider = ({ children }) => {

    const store = configureStore({
        reducer: {
            [authSlice.reducerPath]: authSlice.reducer,
            [transactionSlice.reducerPath]: transactionSlice.reducer,
            auth: authReducer,
            transaction: transactionReducer
        },
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(authSlice.middleware, transactionSlice.middleware),

        devTools: false
    })

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider
