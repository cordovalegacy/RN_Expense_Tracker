
// !Packages
import { useEffect, useState, useCallback } from 'react'
import { Calendar } from 'react-native-calendars'
import { cleanData } from '../utils/functions/cleanData'
import { SafeAreaView, Text, View, ScrollView, RefreshControl } from "react-native"
import { useRetrieveAllUsersTransactionsMutation } from '../redux/api/transaction/transactionApiSlice'

// !Components
import Title from '../components/Title'

// !Styles
import { viewAll } from "../styles/viewAll"

export default function ViewAll({ transaction, loggedInUser }) {

  const [retrieve, { isLoading }] = useRetrieveAllUsersTransactionsMutation()

  const [allTransactions, setAllTransactions] = useState({
    allIncomeRecords: [],
    allExpenseRecords: []
  })

  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = useCallback(() => {
    setRefreshing(true)
    getIncomeList()
    getExpenseList()
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])

  //!--Income--!//
  const getIncomeList = async () => {
    let result = await retrieve({ type: "income", id: loggedInUser })
    result = result.data
    let cleanedData = cleanData(result)
    transaction && cleanedData.push(transaction)
    console.log("Cleaned Income: ", cleanedData)
    console.log("transaction: ", transaction)
    try {
      setAllTransactions((prevState) => ({
        ...prevState,
        allIncomeRecords: [
          prevState.allIncomeRecords,
          ...cleanedData
        ]
      }))
    }
    catch (err) {
      console.log("Error: ", err)
    }
  }

  //!--Expense--!//
  const getExpenseList = async () => {
    let result = await retrieve({ type: "bill", id: loggedInUser })
    result = result.data
    const cleanedData = cleanData(result)
    try {
      setAllTransactions((prevState) => ({
        ...prevState,
        allExpenseRecords: [
          prevState.allExpenseRecords,
          ...cleanedData
        ]
      }))
    }
    catch (err) {
      console.log("Error: ", err)
    }
  }

  useEffect(() => {

    getIncomeList()
    getExpenseList()

  }, [loggedInUser])

  return (
    <SafeAreaView style={viewAll.screen}>
      <Title
        titleBackground={viewAll.titleBackground}
        title={viewAll.title}
      >Your Budget List</Title>
      <View
        style={[
          viewAll.main,
          {
            marginTop: 10,
            justifyContent: "flex-start",
            alignItems: "stretch",
            flex: 1.05
          }
        ]}>
        <Calendar style={viewAll.calendar} theme={{
          calendarBackground: "#000041",
          monthTextColor: "white",
          dayTextColor: "white",
          todayTextColor: "black",
          todayBackgroundColor: "white"
        }} />
      </View>
      <ScrollView
        style={viewAll.screen}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        <View
          style={[
            viewAll.main,
            {
              justifyContent: "center",
              alignItems: "stretch",
              flex: .95
            }]}>
          <View
            style={[
              viewAll.titleBackground,
              {
                marginVertical: 5,
                borderWidth: 3
              }]}>
            <Text
              style={[
                viewAll.title,
                { fontWeight: "800" }]
              }>Income</Text>
          </View>
          <View>
            {allTransactions.allIncomeRecords.slice(1).map((item) => (
              <View style={viewAll.mainContentBackground} key={item?.id + Math.random(10000)}>
                <Text style={viewAll.mainContent}>{item?.name}</Text>
                <Text
                  style={[
                    viewAll.mainContent,
                    { color: "green" }
                  ]}>
                  ${item?.amount}
                </Text>
              </View>
            ))}
          </View>
          <View
            style={[
              viewAll.titleBackground,
              {
                marginVertical: 5,
                borderWidth: 3
              }]}>
            <Text
              style={[
                viewAll.title,
                { fontWeight: "800" }]
              }>Expenses</Text>
          </View>
          <View>
            {allTransactions.allExpenseRecords.slice(1).map((item) => (
              <View style={viewAll.mainContentBackground} key={item?.id + Math.random(10000)}>
                <Text style={viewAll.mainContent}>{item?.name}</Text>
                <Text
                  style={[
                    viewAll.mainContent,
                    { color: "red" }
                  ]}>
                  ${item?.amount}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  )
}
