
// !Packages
import { Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import ReduxProvider from './providers/ReduxProvider'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// !Components
import Login from './screens/Login'
import Income from './screens/Income'
import ViewAll from './screens/ViewAll'
import Register from './screens/Register'
import Overview from './screens/Overview'
import Expenses from './screens/Expenses'
import NewRecord from './screens/NewRecord'
import AppWrapper from './constants/AppWrapper'
import { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// !Routing
const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const TopTabView = () => (
    <TopTab.Navigator screenOptions={{
      tabBarContentContainerStyle: { backgroundColor: "#000041" },
      tabBarLabelStyle: { fontWeight: "900" },
      tabBarPressOpacity: 80,
      tabBarActiveTintColor: "gold",
      tabBarInactiveTintColor: "white"
    }}>
      <TopTab.Screen name='Income' component={Income} />
      <TopTab.Screen name='Expenses' component={Expenses} />
    </TopTab.Navigator>
  )

  return (
    <>
      <StatusBar style="light" />
      <ReduxProvider>
        <NavigationContainer>
          {
            isLoggedIn
              ? <BottomTab.Navigator
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
                      <NewRecord {...props} TopTabView={TopTabView} />
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
              : <Stack.Navigator screenOptions={{
                headerShown: false
              }}>
                <Stack.Screen
                  name='Login'
                  component={Login}
                />
                <Stack.Screen
                  name='Register'
                  component={Register}
                  options={{
                    presentation: "modal"
                  }}
                />
              </Stack.Navigator>
          }

        </NavigationContainer>
      </ReduxProvider>
    </>
  )
}

