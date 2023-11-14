
// !Packages
import { useState } from "react"
import { Pressable, Text, View } from "react-native"

// !Styles
import { newRecord } from "../styles/newRecord"

// !Components
import InputGroup from "../components/InputGroup"

export default function Expenses({ isLoading, transactionSubmitHandler }) {

    const [expense, setExpense] = useState({
        name: "",
        amount: "",
        dueDate: "",
        description: "",
        type: "bill"
    })

    const changeHandler = (fieldName, value) => {
        setExpense((prevExpense) => ({
            ...prevExpense,
            [fieldName]: value
        }))
    }

    return (
        <View style={[newRecord.main, newRecord.mainBackground]}>
            <View style={newRecord.form}>
            {isLoading && <Text style={{ color: "white", marginBottom: -20 }}>...Loading</Text>}
                <InputGroup
                    label={"Expense Name:"}
                    placeholder={"Amazon"}
                    onChange={(text) => changeHandler("name", text)}
                    secure={false}
                />
                <InputGroup
                    label={"Amount:"}
                    placeholder={"105"}
                    onChange={(text) => changeHandler("amount", text)}
                    secure={false}
                />
                <InputGroup
                    label={"Due Date:"}
                    placeholder={"mm/dd/yyyy"}
                    onChange={(text) => changeHandler("dueDate", text)}
                    secure={false}
                />
                <InputGroup
                    label={"Description:"}
                    placeholder={"Christmas Gift"}
                    onChange={(text) => changeHandler("description", text)}
                    secure={false}
                />
                <View style={newRecord.inputGroup}>
                    <Pressable onPress={() => transactionSubmitHandler(expense)}>
                        <View style={newRecord.button}>
                            <Text style={newRecord.buttonText}>Add Expense</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}