import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    id: null,
    name: "",
    expense: {
        amount: null
    },
    income: {
        amount: null
    }
}

const transactionSlice = createSlice({
    name: "transaction",
    initialState: initialStateValue,
    reducers: {
        addNewTransaction: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { addNewTransaction } = transactionSlice.actions
export default transactionSlice.reducer