

export const changeHandler = (fieldName, value, setter) => {
    setter((prevGetter) => ({
        ...prevGetter,
        [fieldName]: value
    }))
}