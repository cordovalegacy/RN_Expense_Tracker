
// !Packages
import { SafeAreaView, View } from "react-native"

// !Components

import Title from "../components/Title"

// !Styles
import { newRecord } from '../styles/newRecord'

export default function NewRecord({ TopTabView, setTransaction }) {

    return (
        <SafeAreaView style={newRecord.screen}>
            <Title
                title={newRecord.title}
                titleBackground={newRecord.titleBackground}
            >Add a New Record</Title>
            <View
                style={[
                    newRecord.main,
                    {
                        justifyContent: "center",
                        alignItems: "stretch",
                        flex: 1
                    }
                ]}>
                <TopTabView setTransaction={setTransaction}/>
            </View>
        </SafeAreaView>
    )
}
