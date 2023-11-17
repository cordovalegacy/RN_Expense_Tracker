
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
export const showLoad = async (setter, lag) => {
    setter(true)
    await delay(lag)
}