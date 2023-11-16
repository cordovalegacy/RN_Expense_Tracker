
// !Packages
import { useState } from "react"
import { Pressable, Text, View } from "react-native"
import { generateRefs } from "../utils/functions/generateRefs"
import { changeHandler } from "../utils/functions/inputChangeHandler"

// !Styles
import { newRecord } from "../styles/newRecord"

// !Components
import InputGroup from "../components/InputGroup"

export default function Expenses({ isLoading, transactionSubmitHandler, user }) {

    const [expense, setExpense] = useState({
        name: "",
        amount: "",
        dueDate: "",
        description: "",
        type: "bill",
        user: user
    })

    const expenseRefs = generateRefs(expense)

    const submitHandler = (expense) => {
        Object.values(expenseRefs).forEach((ref) => {
            if (ref && ref.current) {
                ref.current.clear()
            }
        })
        transactionSubmitHandler(expense)
    }

    return (
        <View style={[newRecord.main, newRecord.mainBackground]}>
            <View style={newRecord.form}>
                {isLoading && <Text style={{ color: "white", marginBottom: -20 }}>...Loading</Text>}
                <InputGroup
                    label={"Expense Name:"}
                    inputConfig={{
                        placeholder: "Waste Management",
                        secureTextEntry: false,
                        onChangeText: (text) => changeHandler("name", text, setExpense),
                        maxLength: 30,
                        ref: expenseRefs.nameInput
                    }}
                />
                <InputGroup
                    label={"Amount:"}
                    inputConfig={{
                        placeholder: "105",
                        secureTextEntry: false,
                        onChangeText: (text) => changeHandler("amount", text, setExpense),
                        maxLength: 30,
                        keyboardType: 'decimal-pad',
                        ref: expenseRefs.amountInput
                    }}
                />
                <InputGroup
                    label={"Due Date:"}
                    inputConfig={{
                        placeholder: "MM/DD/YYYY",
                        secureTextEntry: false,
                        onChangeText: (text) => changeHandler("dueDate", text, setExpense),
                        numberOfLines: 1,
                        keyboardType: 'decimal-pad',
                        ref: expenseRefs.dueDateInput
                    }}
                />
                <InputGroup
                    label={"Description:"}
                    inputConfig={{
                        placeholder: "Christmas Gift",
                        secureTextEntry: false,
                        onChangeText: (text) => changeHandler("description", text, setExpense),
                        maxLength: 60,
                        ref: expenseRefs.descriptionInput
                    }}
                />
                <View style={newRecord.inputGroup}>
                    <Pressable onPress={() => submitHandler(expense)}>
                        <View style={newRecord.button}>
                            <Text style={newRecord.buttonText}>Add Expense</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}