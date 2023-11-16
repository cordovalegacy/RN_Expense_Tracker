import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    id: null,
    name: "",
    expense: {
        amount: null
    },
    income: {
        amount: null
    },
    dueDate: "",
    description: ""
}

const transactionSlice = createSlice({
    name: "transaction",
    initialState: initialStateValue,
    reducers: {
        addNewTransaction: (state, action) => {
            state = action.payload
        }
    }
})

export const { addNewTransaction } = transactionSlice.actions
export default transactionSlice.reducer