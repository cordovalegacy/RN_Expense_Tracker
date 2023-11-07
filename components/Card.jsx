
// !Packages
import { View, Text } from "react-native"

// !Styles
import { overview } from "../styles/overview"

export default function Card({ header, transactions, status, total }) {
    return (
        <View style={[overview.screen, overview.mainBackground]}>
            <Text style={overview.mainTitle}>{header}</Text>
            <View style={overview.mainContentContainer}>
                {transactions.map((transaction, idx) => (
                    <Text style={overview.mainContent} key={idx}>${transaction.amount} - {transaction.name}</Text>
                ))}
                <Text style={overview.mainContent}>--------------------------------</Text>
                <Text style={[overview.mainContent, status]}>${total} - Total</Text>
            </View>
        </View>
    )
}
