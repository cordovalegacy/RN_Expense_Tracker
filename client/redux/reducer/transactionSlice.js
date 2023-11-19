import { createSlice } from '@reduxjs/toolkit'
//may go with a different state management system
const transactionSlice = createSlice({
    name: "transaction",
    initialState: null,
    reducers: {
        addNewTransaction: (state, action) => {
            console.log("transaction slice 16", action.payload)
            state = action.payload
            console.log("transaction slice 16", action.payload)
        }
    }
})

export const { addNewTransaction } = transactionSlice.actions
export default transactionSlice.reducer