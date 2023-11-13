
// !Packages
import { createStackNavigator } from '@react-navigation/stack'

// !Components
import Login from '../../screens/Login'
import Register from '../../screens/Register'

// !Routing
const Stack = createStackNavigator()

export default function UnAuthenticatedHome() {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
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
    )
}
