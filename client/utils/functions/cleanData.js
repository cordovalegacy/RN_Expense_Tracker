
export const cleanData = (state) => {
    const extractedData = state.map((data) => ({
        ...data,
        user: undefined
    }))
    return extractedData
}