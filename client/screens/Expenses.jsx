
// !Packages
import { Pressable, Text, View } from "react-native"

// !Styles
import { newRecord } from "../styles/newRecord"

// !Components
import InputGroup from "../components/InputGroup"

export default function Expenses() {
    return (
        <View style={[newRecord.main, newRecord.mainBackground]}>
            <View style={newRecord.form}>
                <InputGroup label={"Name:"} placeholder={"Amazon"} />
                <InputGroup label={"Amount:"} placeholder={"105"} />
                <InputGroup label={"Due Date:"} placeholder={"mm/dd/yyyy"} />
                <InputGroup label={"Description:"} placeholder={"Christmas Gift"} />
                <View style={newRecord.inputGroup}>
                    <Pressable>
                        <View style={newRecord.button}>
                            <Text style={newRecord.buttonText}>Add Expense</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}