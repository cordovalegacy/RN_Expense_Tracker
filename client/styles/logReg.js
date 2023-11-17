
// !Packages
import { StyleSheet } from 'react-native'

export const logReg = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#0d47a1"
    },
    loadingText: {
        color: "white",
        marginBottom: -20,
        fontSize: 35
    },
    loadingScreen: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000041"
    },
    loadingContainer: {
        position: "absolute",
        top: "10%",
        left: "auto",
        zIndex: 100,
        opacity: 0.9,
        padding: 20,
        borderRadius: "20%",
        backgroundColor: "#000041"
    },
    loadingGif: {
        width: "100%",
        borderRadius: 20
    },
    formContainer: {
        flex: 0.6,
        borderRadius: 20,
        backgroundColor: '#0d47a1',
        opacity: 0.9,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 20,
        elevation: 4,
        shadowColor: "black",
        borderRadius: 20,
        width: "95%",
        marginTop: "25%",
        gap: 5
    },
    formContainerScroll: {
        borderRadius: 20,
        backgroundColor: '#0d47a1',
        opacity: 0.9,
        paddingVertical: 20,
        elevation: 4,
        shadowColor: "black",
        borderRadius: 20,
        width: "95%",
        gap: 5,
        flex: 0.6,
        marginBottom: 50
    },
    loginContainerScroll: {
        borderRadius: 20,
        backgroundColor: '#0d47a1',
        opacity: 0.9,
        paddingBottom: 0,
        elevation: 4,
        shadowColor: "black",
        borderRadius: 20,
        width: "95%",
        gap: 5,
        flex: 0.4,
        marginVertical: 25
    },
    title: {
        color: "white",
        fontSize: 40,
        fontWeight: "800",
        marginTop: 20
    },
    main: {
        flex: 1,
        backgroundColor: '#0d47a1',
        gap: 10
    },
    mainBackground: {
        width: "100%"
    },
    form: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        gap: 15,
        marginTop: 50
    },
    inputGroup: {
        gap: 5
    },
    label: {
        color: "white",
        fontSize: 20,
        marginTop: 40
    },
    input: {
        borderWidth: 2,
        borderColor: "#1e1e1e",
        elevation: 4,
        shadowColor: "black",
        backgroundColor: "#ccc",
        padding: 15,
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
        fontSize: 25,
        fontWeight: "700",
        textAlign: "center"
    },
    noAccount: {
        color: "blue",
        fontSize: 15,
        fontWeight: "700",
        textAlign: "center",
        width: "100%"
    },
    noAccountContainer: {
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        width: "100%"
    },
    noAccountButton: {
        backgroundColor: "lightblue",
        padding: 5,
        borderRadius: 10,
        width: "90%",
        marginLeft: "5%",
        marginTop: 20
    }
})