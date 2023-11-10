
// !Packages
import { Pressable, Text, TextInput, View } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'

// !Styles
import { newRecord } from "../styles/newRecord"

export default function Income() {
    return (
        <View style={[newRecord.main, newRecord.mainBackground]}>
            <View style={newRecord.form}>
                <View style={newRecord.inputGroup}>
                    <Text style={newRecord.label}>Income Name: </Text>
                    <TextInput
                        style={newRecord.input}
                        placeholder="Waste Management"
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
                    <Text style={newRecord.label}>Pay Date: </Text>
                    <TextInput
                        style={newRecord.input}
                        placeholder="mm/dd/yyyy"
                    />
                </View>
                <View style={newRecord.inputGroup}>
                    <Text style={newRecord.label}>Description: </Text>
                    <TextInput
                        style={newRecord.input}
                        placeholder="John's Job"
                    />
                </View>
                <View style={newRecord.inputGroup}>
                    <Pressable>
                        <View style={newRecord.button}>
                            <Text style={newRecord.buttonText}>Add Income</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
