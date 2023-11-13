
// !Packages
import { createStackNavigator } from '@react-navigation/stack'
import {
    useRegisterMutation,
    useLoginMutation
} from '../../redux/api/auth/authApiSlice'

// !Components
import Login from '../../screens/Login'
import Register from '../../screens/Register'

// !Routing
const Stack = createStackNavigator()

export default function UnAuthenticatedHome({ setIsLoggedIn }) {

    const [login, { isLoading: isLoginLoading }] = useLoginMutation()
    const [register, { isLoading: isRegisterLoading }] = useRegisterMutation()

    const loginHandler = ({ email, password }) => {
        const payload = { email, password }
        login(payload)
            .unwrap()
            .then((res) => {
                console.log("Response: ", res)
            })
            .catch((err) => {
                console.log("Error: ", err)
            })
    }

    const registrationHandler = ({ firstName, lastName, email, password, confirmPassword }) => {
        const payload = { firstName, lastName, email, password, confirmPassword }
        register(payload)
            .unwrap()
            .then((res) => {
                console.log("Response: ", res)
            })
            .catch((err) => {
                console.log("Error: ", err)
            })
    }

    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
                name='Login'
            >
                {(props) => (
                    <Login
                        {...props}
                        isLoading={isLoginLoading}
                        loginHandler={loginHandler}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen
                name='Register'
                options={{
                    presentation: "modal"
                }}
            >
                {(props) => (
                    <Register
                        {...props}
                        isLoading={isRegisterLoading}
                        registrationHandler={registrationHandler}
                    />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    )
}
