
// !Packages
import { useState } from "react"
import { Pressable, Text, View } from "react-native"
import { generateRefs } from "../utils/functions/generateRefs"
import { changeHandler } from "../utils/functions/inputChangeHandler"

// !Styles
import { newRecord } from "../styles/newRecord"

// !Components
import InputGroup from "../components/InputGroup"

export default function Income({ isLoading, transactionSubmitHandler, user }) {

    const [income, setIncome] = useState({
        name: "",
        amount: "",
        dueDate: "",
        description: "",
        type: "income",
        user: user
    })

    const incomeRefs = generateRefs(income)

    const submitHandler = (income) => {
        Object.values(incomeRefs).forEach((ref) => {
            if (ref && ref.current) {
                ref.current.clear()
            }
        })
        transactionSubmitHandler(income)
    }

    return (
        <View style={[newRecord.main, newRecord.mainBackground]}>
            <View style={newRecord.form}>
                {isLoading && <Text style={{ color: "white", marginBottom: -20 }}>...Loading</Text>}
                <InputGroup
                    label={"Income Name:"}
                    inputConfig={{
                        placeholder: "Waste Management",
                        secureTextEntry: false,
                        onChangeText: (text) => changeHandler("name", text, setIncome),
                        maxLength: 30,
                        ref: incomeRefs.nameInput
                    }}
                />
                <InputGroup
                    label={"Amount:"}
                    inputConfig={{
                        placeholder: "2000",
                        secureTextEntry: false,
                        onChangeText: (text) => changeHandler("amount", text, setIncome),
                        maxLength: 30,
                        keyboardType: 'decimal-pad',
                        ref: incomeRefs.amountInput
                    }}
                />
                <InputGroup
                    label={"Pay Date:"}
                    inputConfig={{
                        placeholder: "MM/DD/YYYY",
                        secureTextEntry: false,
                        onChangeText: (text) => changeHandler("dueDate", text, setIncome),
                        numberOfLines: 1,
                        keyboardType: 'decimal-pad',
                        ref: incomeRefs.dueDateInput
                    }}
                />
                <InputGroup
                    label={"Description:"}
                    inputConfig={{
                        placeholder: "My job",
                        secureTextEntry: false,
                        onChangeText: (text) => changeHandler("description", text, setIncome),
                        maxLength: 60,
                        ref: incomeRefs.descriptionInput
                    }}
                />
                <View style={newRecord.inputGroup}>
                    <Pressable onPress={() => submitHandler(income)}>
                        <View style={newRecord.button}>
                            <Text style={newRecord.buttonText}>Add Income</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
