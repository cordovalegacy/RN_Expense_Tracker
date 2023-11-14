
// !Packages
import { Text, TextInput, View } from "react-native"

// !Styles
import { newRecord } from "../styles/newRecord"

export default function InputGroup({ label, placeholder, value, onChange, secure }) {
    return (
        <View style={newRecord.inputGroup}>
            <Text style={newRecord.label}>{label} </Text>
            <TextInput
                style={newRecord.input}
                placeholder={placeholder}
                onChangeText={onChange}
                secureTextEntry={secure}
                value={value}
            />
        </View>
    )
}
