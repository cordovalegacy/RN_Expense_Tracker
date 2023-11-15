
// !Packages
import { useState } from "react"
import { Pressable, Text, View } from "react-native"

// !Styles
import { newRecord } from "../styles/newRecord"

// !Components
import InputGroup from "../components/InputGroup"

export default function Income({ isLoading, transactionSubmitHandler, user }) {

    const [income, setIncome] = useState({
        name: "",
        amount: "",
        dueDate: new Date().getDate(),
        description: "",
        type: "income",
        user: user
    })

    const changeHandler = (fieldName, value) => {
        setIncome((prevIncome) => ({
            ...prevIncome,
            [fieldName]: value
        }))
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
                        onChangeText: (text) => changeHandler("name", text),
                        maxLength: 30
                    }}
                />
                <InputGroup
                    label={"Amount:"}
                    inputConfig={{
                        placeholder: "2000",
                        secureTextEntry: false,
                        onChangeText: (text) => changeHandler("amount", text),
                        maxLength: 30,
                        keyboardType: 'decimal-pad'
                    }}
                />
                <InputGroup
                    label={"Pay Date:"}
                    inputConfig={{
                        placeholder: "MM/DD/YYYY",
                        secureTextEntry: false,
                        onChangeText: (text) => changeHandler("dueDate", text),
                        numberOfLines: 1,
                        keyboardType: 'decimal-pad'
                    }}
                />
                <InputGroup
                    label={"Description:"}
                    inputConfig={{
                        placeholder: "My job",
                        secureTextEntry: false,
                        onChangeText: (text) => changeHandler("description", text),
                        maxLength: 60
                    }}
                />
                <View style={newRecord.inputGroup}>
                    <Pressable onPress={() => transactionSubmitHandler(income)}>
                        <View style={newRecord.button}>
                            <Text style={newRecord.buttonText}>Add Income</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
