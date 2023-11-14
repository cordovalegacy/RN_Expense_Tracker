
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
                    <Text
                        style={overview.mainContent}
                        key={idx}
                    ><Text style={{
                        fontWeight: "900",
                        fontSize: 21,
                        textDecorationLine: "underline"
                    }}
                    >${transaction.amount}
                    </Text> - {transaction.name}
                    </Text>
                ))}
                <Text style={[overview.mainContent, status, { paddingTop: 10, borderTopWidth: 2, fontWeight: "900", fontSize: 22 }]}>${total} - Total</Text>
            </View>
        </View>
    )
}
