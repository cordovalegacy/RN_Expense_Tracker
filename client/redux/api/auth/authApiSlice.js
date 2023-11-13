import { authSlice } from "./authConfig"

const authApiSlice = authSlice.injectEndpoints({
    endpoints: builder => ({
        retrieveAllUsers: builder.mutation({
            query: () => ({
                url: '/getAllUsers',
                method: 'GET'
            })
        }),
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: '/login',
                method: 'POST',
                body: { email, password }
            })
        }),
        register: builder.mutation({
            query: ({ firstName, lastName, email, password, confirmPassword }) => ({
                url: '/register',
                method: 'POST',
                body: { firstName, lastName, email, password, confirmPassword }
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/logout',
                method: 'POST'
            })
        })
    })
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useRetrieveAllUsersMutation,
    useLogoutMutation,
} = authApiSlice //can call export {} whatever you want