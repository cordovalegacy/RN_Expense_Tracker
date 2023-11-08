
// !Packages
import { SafeAreaView, View } from "react-native"
import { income, expenses, balance, incomeTotal, expenseTotal, grandTotal } from "../utils/mockOverviews"

// !Styles
import { overview } from "../styles/overview"

// !Components
import Card from "../components/Card"
import Title from "../components/Title"

export default function Overview() {

    return (
        <SafeAreaView style={overview.screen}>
            <Title titleBackground={overview.titleBackground} title={overview.title}>Budget Overview</Title>
            <View style={overview.main}>
                <Card
                    header={"Income"}
                    transactions={income}
                    status={overview.positive}
                    total={incomeTotal}
                />
                <Card
                    header={"Expenses"}
                    transactions={expenses}
                    status={overview.negative}
                    total={expenseTotal}
                />
                <Card
                    header={"Balance"}
                    transactions={balance}
                    status={Number(grandTotal) < 0 ? overview.negative : overview.positive}
                    total={grandTotal}
                />
            </View>
        </SafeAreaView>
    )
}
