
// !Packages
import { SafeAreaView, View, Text } from "react-native"

import { overview } from "../styles/overview"

export default function Overview() {
    return (
        <SafeAreaView style={overview.screen}>
            <View style={overview.titleBackground}>
                <Text style={overview.title}>Budget Overview</Text>
            </View>
            <View style={overview.main}>
                <View style={[overview.screen, overview.mainBackground]}>
                    <Text style={overview.mainTitle}>Income</Text>
                    <View style={overview.mainContentContainer}>
                        <Text style={overview.mainContent}>$3,100 - WM</Text>
                        <Text style={overview.mainContent}>$1,270 - Perdoceo</Text>
                        <Text style={overview.mainContent}>$8,650 - Ramsey</Text>
                        <Text style={overview.mainContent}>--------------------------------</Text>
                        <Text style={[overview.mainContent, overview.positive]}>$13,020 - Total</Text>
                    </View>
                </View>
                <View style={[overview.screen, overview.mainBackground]}>
                    <Text style={overview.mainTitle}>Expenses</Text>
                    <View style={overview.mainContentContainer}>
                        <Text style={overview.mainContent}>$3,500 - Week 1</Text>
                        <Text style={overview.mainContent}>$770 - Week 2</Text>
                        <Text style={overview.mainContent}>$1,280 - Week 3</Text>
                        <Text style={overview.mainContent}>$1,050 - Week 4</Text>
                        <Text style={overview.mainContent}>--------------------------------</Text>
                        <Text style={[overview.mainContent, overview.negative]}>$6,600 - Total</Text>
                    </View>
                </View>
                <View style={[overview.screen, overview.mainBackground]}>
                    <Text style={overview.mainTitle}>Balance</Text>
                    <View style={overview.mainContentContainer}>
                        <Text style={overview.mainContent}>$13,020 - Income</Text>
                        <Text style={overview.mainContent}>$6,600 - Expenses</Text>
                        <Text style={overview.mainContent}>--------------------------------</Text>
                        <Text style={[overview.mainContent, overview.positive]}>$6,420 - Remaining</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
