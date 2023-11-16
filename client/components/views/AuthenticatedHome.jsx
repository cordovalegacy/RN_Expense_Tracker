
// !Packages
import { useSelector } from 'react-redux'
import { Platform } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// !Components
import TopTabView from './TopTabView'
import ViewAll from '../../screens/ViewAll'
import Overview from '../../screens/Overview'
import NewRecord from '../../screens/NewRecord'
import AppWrapper from '../../constants/AppWrapper'
import { useState } from 'react'

// !Routing
const BottomTab = createBottomTabNavigator()

export default function AuthenticatedHome() {

    const { id:loggedInUser } = useSelector((state) => state.auth.value.value)
    const [transaction, setTransaction] = useState(null)

    return (
        <BottomTab.Navigator
            initialRouteName='Overview'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName
                    if (route.name === 'Overview') {
                        iconName = focused
                            ? 'person-circle'
                            : 'person-circle-outline'
                    } else if (route.name === 'ViewAll') {
                        iconName = focused ? 'list-circle' : 'list-circle-outline'
                    } else if (route.name === 'New') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline'
                    }
                    return <Ionicons name={iconName} size={35} color={color} />
                },
                tabBarItemStyle: {
                    height: 100,
                    paddingBottom: Platform.OS === "android" ? 35 : 40,
                    paddingTop: Platform.OS === "android" ? 5 : 10,
                    borderTopWidth: 2,
                    borderTopColor: "gold"
                },
                headerShown: false,
                tabBarActiveTintColor: "gold",
                tabBarInactiveTintColor: "#ccc",
                tabBarStyle: Platform.OS === "android" ? { height: 75 } : { height: 100 },
                tabBarInactiveBackgroundColor: "#000025",
                tabBarActiveBackgroundColor: "#000041"
            })
            }
        >
            <BottomTab.Screen name='Overview' options={{ tabBarLabel: "Overview" }}>
                {(props) => (
                    <AppWrapper>
                        <Overview {...props} />
                    </AppWrapper>
                )}
            </BottomTab.Screen>
            <BottomTab.Screen name='New' options={{ tabBarLabel: "New Record" }}>
                {(props) => (
                    <AppWrapper>
                        <NewRecord
                            {...props}
                            TopTabView={TopTabView}
                            setTransaction={setTransaction}
                        />
                    </AppWrapper>
                )}
            </BottomTab.Screen>
            <BottomTab.Screen name='ViewAll' options={{ tabBarLabel: "View All" }}>
                {(props) => (
                    <AppWrapper>
                        <ViewAll
                            {...props}
                            transaction={transaction}
                            loggedInUser={loggedInUser}
                        />
                    </AppWrapper>
                )}
            </BottomTab.Screen>
        </BottomTab.Navigator >
    )
}
