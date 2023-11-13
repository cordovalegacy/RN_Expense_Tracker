
// !Packages
import { Pressable, Text, View } from "react-native"

// !Styles
import { newRecord } from "../styles/newRecord"

// !Components
import InputGroup from "../components/InputGroup"

export default function Income() {
    return (
        <View style={[newRecord.main, newRecord.mainBackground]}>
            <View style={newRecord.form}>
                <InputGroup label={"Income Name:"} placeholder={"Waste Management"}/>
                <InputGroup label={"Amount:"} placeholder={"105"}/>
                <InputGroup label={"Pay Date:"} placeholder={"mm/dd/yyyy"}/>
                <InputGroup label={"Description:"} placeholder={"John's Job"}/>
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
