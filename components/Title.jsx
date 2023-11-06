
// !Packages
import { Text, View } from "react-native"

export default function Title({ titleBackground, title, children }) {
    return (
        <View style={titleBackground}>
            <Text style={title}>{children}</Text>
        </View>
    )
}
