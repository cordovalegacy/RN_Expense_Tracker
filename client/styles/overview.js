
// !Packages
import { StyleSheet } from 'react-native'

export const overview = StyleSheet.create({
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
        backgroundColor: '#0d47a1',
        opacity: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainBackground: {
        backgroundColor: "white",
        width: "95%",
        marginVertical: 3,
        padding: 10,
        borderRadius: 20,
        elevation: 4,
        shadowColor: "black",
        borderWidth: 3,
        borderColor: "gray"
    },
    mainTitle: {
        fontSize: 25,
        fontStyle: "italic",
        textDecorationLine: "underline",
        fontWeight:"700",
        textAlign: "center"
    },
    mainContentContainer: {
        paddingHorizontal: 25,
        paddingVertical: 5
    },
    mainContent: {
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center"
    },
    positive: {
        color: "green",
        fontWeight: "800",
        fontSize: 20
    },
    negative: {
        color: "red",
        fontWeight: "800",
        fontSize: 20
    }
})