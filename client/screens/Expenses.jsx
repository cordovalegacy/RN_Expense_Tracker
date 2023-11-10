
// !Packages
import { newRecord } from "../styles/newRecord"
import { Pressable, Text, TextInput, View } from "react-native"

export default function Expenses() {
    return (
        <View style={[newRecord.main, newRecord.mainBackground]}>
            <View style={newRecord.form}>
                <View style={newRecord.inputGroup}>
                    <Text style={newRecord.label}>Name: </Text>
                    <TextInput
                        style={newRecord.input}
                        placeholder="Amazon"
                    />
                </View>
                <View style={newRecord.inputGroup}>
                    <Text style={newRecord.label}>Amount: </Text>
                    <TextInput
                        style={newRecord.input}
                        placeholder="105"
                    />
                </View>
                <View style={newRecord.inputGroup}>
                    <Text style={newRecord.label}>Due Date: </Text>
                    <TextInput
                        style={newRecord.input}
                        placeholder="mm/dd/yyyy"
                    />
                </View>
                <View style={newRecord.inputGroup}>
                    <Text style={newRecord.label}>Description: </Text>
                    <TextInput
                        style={newRecord.input}
                        placeholder="Christmas Gift"
                    />
                </View>
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