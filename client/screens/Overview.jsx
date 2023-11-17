
// !Packages
import { useState, useEffect, useCallback } from "react"
import { useSelector } from "react-redux"
import { SafeAreaView, View, Text, ScrollView, RefreshControl } from "react-native"
import { useRetrieveAllUsersTransactionsMutation } from '../redux/api/transaction/transactionApiSlice'


// !Styles
import { overview } from "../styles/overview"

// !Components
import Card from "../components/Card"
import Title from "../components/Title"
import { cleanData } from "../utils/functions/cleanData"

export default function Overview() {

    const loggedInUser = useSelector((state) => state.auth.value.value)
    const [retrieve] = useRetrieveAllUsersTransactionsMutation()

    const [records, setRecords] = useState({
        incomeTotal: 0,
        expenseTotal: 0,
        grandTotal: 0,
        grandTotalStatus: ""
    })

    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = useCallback(() => {
        setRefreshing(true)
        getIncomeAmounts()
        getExpenseAmounts()
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }, [])

    //!--Income--!//
    const getIncomeAmounts = async () => {
        let result = await retrieve({ type: "income", id: loggedInUser.id })
        result = result.data
        let cleanedData = await cleanData(result)
        let amounts = cleanedData.map((data) => data.amount)
        let incomeTotal = amounts.length > 0
            ? amounts.reduce((prevSum, currentVal) => (prevSum + currentVal))
            : 0
        try {
            setRecords((prevState) => ({ ...prevState, incomeTotal: incomeTotal }))
        }
        catch (err) {
            console.log("Error: ", err)
        }
    }

    //!--Expense--!//
    const getExpenseAmounts = async () => {
        let result = await retrieve({ type: "bill", id: loggedInUser.id })
        result = result.data
        const cleanedData = await cleanData(result)
        let amounts = await cleanedData.map((data) => data.amount)
        let expenseTotal = amounts.length > 0
            ? amounts.reduce((prevSum, currentVal) => (prevSum + currentVal))
            : 0
        try {
            setRecords((prevState) => ({ ...prevState, expenseTotal: expenseTotal }))
        }
        catch (err) {
            console.log("Error: ", err)
        }
    }

    useEffect(() => {

        getIncomeAmounts()
        getExpenseAmounts()

    }, [loggedInUser])

    useEffect(() => {
        let grandTotal = records.incomeTotal - records.expenseTotal
        let grandTotalStatus = records.incomeTotal >= records.expenseTotal
            ? overview.positive
            : overview.negative

        setRecords((prevState) => ({ ...prevState, grandTotal, grandTotalStatus }))

    }, [records.incomeTotal, records.expenseTotal])

    return (
        <SafeAreaView style={overview.screen}>
            <Title
                titleBackground={overview.titleBackground}
                title={overview.title}
            >Budget Overview</Title>
            <ScrollView contentContainerStyle={{alignItems: "center"}} style={{
                flex: 1,
                backgroundColor: "#0d47a1",
                opacity: 0.8
            }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }>
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
                    status={overview.positive}
                    total={records?.incomeTotal}
                />
                <Card
                    header={"Expenses"}
                    status={overview.negative}
                    total={records?.expenseTotal}
                />
                <Card
                    header={"Balance"}
                    status={records?.grandTotalStatus}
                    total={records?.grandTotal}
                />
            </ScrollView>
        </SafeAreaView>
    )
}
