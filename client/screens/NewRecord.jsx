
// !Packages
import { SafeAreaView, View } from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// !Components
import Income from './Income'
import Expenses from './Expenses'
import Title from "../components/Title"

// !Styles
import { newRecord } from '../styles/newRecord'

// !Routing
const TopTab = createMaterialTopTabNavigator()

export default function NewRecord() {

    const TopTabView = () => (
        <TopTab.Navigator>
            <TopTab.Screen name='Income' component={Income} />
            <TopTab.Screen name='Expenses' component={Expenses} />
        </TopTab.Navigator>
    )

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
                <TopTabView />
            </View>
        </SafeAreaView>
    )
}
