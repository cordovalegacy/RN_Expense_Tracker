import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    id: null,
    name: "",
    email: "",
    firstName: "",
    lastName: "",
    isAuthenticated: false
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialStateValue,
    reducers: {
        authAndLogin: (state, action) => {
            state.isAuthenticated = true
            state.value = action.payload
        }
    }
})

export const { authAndLogin } = authSlice.actions
export default authSlice.reducer