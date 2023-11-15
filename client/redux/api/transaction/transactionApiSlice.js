import { transactionSlice } from "./transactionConfig"

const transactionApiSlice = transactionSlice.injectEndpoints({
    endpoints: builder => ({
        retrieveAllUsersTransactions: builder.mutation({
            query: () => ({
                url: '/getAllUsersTransactions',
                method: 'GET'
            })
        }),
        addNewTransaction: builder.mutation({
            query: (payload) => ({
                url: '/save',
                method: 'POST',
                body: { ...payload }
            })
        }),
        editTransaction: builder.mutation({
            query: ({ id, name, expense, income, dueDate }) => ({
                url: `/editTransaction/${id}`,
                method: 'PATCH',
                body: { name, expense, income, dueDate }
            })
        }),
        deleteTransaction: builder.mutation({
            query: ({id}) => ({
                url: `deleteTransaction/${id}`,
                method: 'POST'
            })
        }),
        viewOneTransaction: builder.mutation({
            query: ({id}) => ({
                url: `/getOneTransaction/${id}`,
                method: "GET"
            })
        })
    })
})

export const {
    useRetrieveAllUsersTransactionsMutation,
    useAddNewTransactionMutation,
    useEditTransactionMutation,
    useDeleteTransactionMutation,
    useViewOneTransactionMutation,
} = transactionApiSlice //can call export {} whatever you want