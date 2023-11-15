
// !Packages
import { Text, TextInput, View } from "react-native"

// !Styles
import { newRecord } from "../styles/newRecord"

export default function InputGroup({ label, inputConfig }) {
    return (
        <View style={newRecord.inputGroup}>
            <Text style={newRecord.label}>{label} </Text>
            <TextInput
                style={newRecord.input}
                {...inputConfig}
            />
        </View>
    )
}
