
// !Packages
import { Calendar } from 'react-native-calendars'
import { mockTransactions } from '../utils/mockTransactions'
import { SafeAreaView, Text, View, FlatList } from "react-native"

// !Components
import Title from '../components/Title'

// !Styles
import { viewAll } from "../styles/viewAll"

export default function ViewAll() {
  return (
    <SafeAreaView style={viewAll.screen}>
      <Title titleBackground={viewAll.titleBackground} title={viewAll.title}>Your Budget List</Title>
      <View style={[viewAll.main, { justifyContent: "center", alignItems: "stretch", flex: 1.1 }]}>
        <Calendar style={viewAll.calendar} theme={{
          calendarBackground: "#000041",
          monthTextColor: "white",
          dayTextColor: "white",
          todayTextColor: "black",
          todayBackgroundColor: "white"
        }} />
      </View>
      <View style={[viewAll.main, { justifyContent: "center", alignItems: "stretch", flex: .9 }]}>
        <View style={[viewAll.titleBackground, { marginVertical: 5, borderWidth: 3 }]}>
          <Text style={[viewAll.title, { fontWeight: "800" }]}>Transactions sorted by date</Text>
        </View>
        <FlatList
          data={mockTransactions}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <View style={viewAll.mainContentBackground}>
              <Text style={viewAll.mainContent}>{item.item.name}</Text>
              <Text style={[viewAll.mainContent, item.item.expense.amount ? { color: "red" } : { color: "green" }]}>
                ${
                  item.item.expense.amount
                    ? item.item.expense.amount
                    : item.item.income.amount
                }
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView >
  )
}
