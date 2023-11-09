
// !Packages
import { StatusBar } from 'expo-status-bar'
import ReduxProvider from './providers/ReduxProvider'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// !Components
import ViewAll from './screens/ViewAll'
import Overview from './screens/Overview'
import NewRecord from './screens/NewRecord'
import AppWrapper from './constants/AppWrapper'

// !Routing
const BottomTab = createBottomTabNavigator()

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <ReduxProvider>
        <NavigationContainer>
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
                paddingBottom: 40,
                paddingTop: 10,
                borderTopWidth: 2,
                borderTopColor: "gold"
              },
              headerShown: false,
              tabBarActiveTintColor: "gold",
              tabBarInactiveTintColor: "#ccc",
              tabBarStyle: { height: 100 },
              tabBarInactiveBackgroundColor: "#000025",
              tabBarActiveBackgroundColor: "#000041"
            })}
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
                  <NewRecord {...props} />
                </AppWrapper>
              )}
            </BottomTab.Screen>
            <BottomTab.Screen name='ViewAll' options={{ tabBarLabel: "View All" }}>
              {(props) => (
                <AppWrapper>
                  <ViewAll {...props} />
                </AppWrapper>
              )}
            </BottomTab.Screen>
          </BottomTab.Navigator>
        </NavigationContainer>
      </ReduxProvider>
    </>
  )
}

