
// !Packages
import { SafeAreaView, View, Text } from "react-native"

import { overview } from "../styles/overview"

export default function Overview() {
    return (
        <SafeAreaView style={overview.screen}>
            <View style={overview.titleBackground}>
                <Text>Budget Overview</Text>
            </View>
            <View>
                <View>
                    <Text>Income:</Text>
                </View>
                <View>
                    <Text>Expenses:</Text>
                </View>
                <View>
                    <Text>Balance:</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
