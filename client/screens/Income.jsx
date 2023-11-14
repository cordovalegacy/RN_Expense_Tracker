
// !Packages
import { useState } from "react"
import { Pressable, Text, View } from "react-native"

// !Styles
import { newRecord } from "../styles/newRecord"

// !Components
import InputGroup from "../components/InputGroup"

export default function Income({ isLoading, transactionSubmitHandler }) {

    const [income, setIncome] = useState({
        name: "",
        amount: "",
        dueDate: "",
        description: "",
        type: "income"
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
                    placeholder={"Waste Management"}
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
                    label={"Pay Date:"}
                    placeholder={"mm/dd/yyyy"}
                    onChange={(text) => changeHandler("dueDate", text)}
                    secure={false}
                />
                <InputGroup
                    label={"Description:"}
                    placeholder={"John's Job"}
                    onChange={(text) => changeHandler("description", text)}
                    secure={false}
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
