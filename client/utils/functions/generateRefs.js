
// !Packages
import { useRef } from "react"

export const generateRefs = (state) => {
    const refs = {}
    Object.keys(state).forEach((field) => {
        refs[field + "Input"] = useRef()
    })
    return refs
}