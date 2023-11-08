
// !Packages
import { StyleSheet } from 'react-native'

export const viewAll = StyleSheet.create({
    screen: {
        flex: 1
    },
    titleBackground: {
        padding: 10,
        backgroundColor: "#0097a7",
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
        backgroundColor: '#0097a7',
        opacity: 0.8,
        paddingHorizontal: 5
    },
    calendar: {
        width: "100%",
        borderRadius: 10,
        padding: 5,
        marginTop: 0,
        elevation: 4,
        shadowColor: "black",
        borderWidth: 2,
        borderColor: "white"
    },
    mainBackground: {
        width: "100%",
        paddingHorizontal: 10,
        backgroundColor: "white",
        borderRadius: 10, 
        flex: 1,
        marginTop: 10,
        marginBottom: 5
    },
    mainTitle: {
        fontSize: 19,
        fontWeight:"800",
        textAlign: "center"
    },
    mainContentBackground: {
        backgroundColor: "#000041",
        padding: 5,
        borderRadius: 5,
        marginVertical: 2,
        borderWidth: 2,
        borderColor: "white"
    }, 
    mainContent: {
        color: "white",
        fontWeight: "700"
    }
})