
// !Packages
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

// !Styles
import { app } from './styles/app'

// !Components
import New from './screens/New'
import ViewAll from './screens/ViewAll'
import Overview from './screens/Overview'
import AppWrapper from './constants/AppWrapper'

// !Routing
const Tab = createMaterialBottomTabNavigator()

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName='Overview'
        shifting={true}
        barStyle={{backgroundColor: "#0097a7", borderTopWidth: 2, borderTopColor: "black"}}
        activeColor='black'
        inactiveColor= "#212121"
        labeled={true}
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
              return <Ionicons name={iconName} size={25} color={color} />
            }
          })}
        >
          <Tab.Screen name='Overview' options={{tabBarLabel: "Overview"}}>
            {(props) => (
              <AppWrapper>
                <Overview {...props} />
              </AppWrapper>
            )}
          </Tab.Screen>
          <Tab.Screen name='New' options={{tabBarLabel: "New"}}>
            {(props) => (
              <AppWrapper>
                <New {...props} />
              </AppWrapper>
            )}
          </Tab.Screen>
          <Tab.Screen name='ViewAll' options={{tabBarLabel: "View All"}}>
            {(props) => (
              <AppWrapper>
                <ViewAll {...props} />
              </AppWrapper>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

