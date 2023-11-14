
// !Packages
import { SafeAreaView, View, Text } from "react-native"
import { useSelector } from "react-redux"
import { income, expenses, balance, incomeTotal, expenseTotal, grandTotal } from "../utils/mockOverviews"

// !Styles
import { overview } from "../styles/overview"

// !Components
import Card from "../components/Card"
import Title from "../components/Title"

export default function Overview() {

    const loggedInUser = useSelector((state) => state.auth.value.value)

    return (
        <SafeAreaView style={overview.screen}>
            <Title
                titleBackground={overview.titleBackground}
                title={overview.title}
            >Budget Overview</Title>
            <View style={overview.main}>
                <Text style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "900",
                    marginTop: 10
                }}>Welcome,{" "}
                    <Text
                        style={{
                            color: "gold",
                            textDecorationLine: "underline"
                        }}
                    >{loggedInUser?.firstName}!
                    </Text>
                </Text>
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
