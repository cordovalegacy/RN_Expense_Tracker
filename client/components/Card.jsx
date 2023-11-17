
// !Packages
import { View, Text } from "react-native"

// !Styles
import { overview } from "../styles/overview"

export default function Card({ header, status, total }) {
    return (
        <View style={[overview.screen, overview.mainBackground]}>
            <Text style={overview.mainTitle}>{header}</Text>
            <Text style={[
                overview.mainContent,
                total
                && status,
                total
                    ? { fontSize: 40 }
                    : { fontSize: 30 }
            ]}>{
                    total
                        ? `$${total}`
                        : "Nothing to display yet"
                }</Text>
        </View>
    )
}
