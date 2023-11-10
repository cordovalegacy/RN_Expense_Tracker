
// !Packages
import { StyleSheet } from 'react-native'

export const newRecord = StyleSheet.create({
    screen: {
        flex: 1
    },
    titleBackground: {
        padding: 10,
        backgroundColor: "#0d47a1",
        width: "100%",
        flexDirection: "row"
    },
    title: {
        width: "100%",
        textAlign: "center",
        fontSize: 20,
        color: "white",
        fontWeight: "700"
    },
    main: {
        flex: 1,
        backgroundColor: '#0d47a1'
    },
    mainBackground: {
        width: "100%"
    },
    form: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        gap: 15,
        marginTop: 25
    },
    inputGroup: {
        gap: 5
    },
    label: {
        color: "white",
        fontSize: 15
    },
    input: {
        borderWidth: 2,
        borderColor: "#1e1e1e",
        elevation: 4,
        shadowColor: "black",
        backgroundColor: "#ccc",
        padding: 10,
        borderRadius: 10
    },
    button: {
        backgroundColor: "gold",
        borderWidth: 2,
        borderColor: "#000041",
        padding: 10,
        borderRadius: 10,
        elevation: 4,
        shadowColor: "black"
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center"
    }
})