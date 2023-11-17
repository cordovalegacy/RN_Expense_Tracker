
// !Packages
import { Text, TextInput, View } from "react-native"

// !Styles
import { newRecord } from "../styles/newRecord"

export default function InputGroup({ label, inputConfig, optionalLabelStyles, optionalInputStyles }) {
    return (
        <View style={newRecord.inputGroup}>
            <Text style={[newRecord.label, optionalLabelStyles]}>{label} </Text>
            <TextInput
                style={[newRecord.input, optionalInputStyles]}
                {...inputConfig}
            />
        </View>
    )
}
