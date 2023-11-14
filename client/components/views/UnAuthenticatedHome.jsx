
// !Packages
import { createStackNavigator } from '@react-navigation/stack'
import {
    useRegisterMutation,
    useLoginMutation
} from '../../redux/api/auth/authApiSlice'
import { useDispatch } from 'react-redux'

// !Components
import Login from '../../screens/Login'
import Register from '../../screens/Register'
import { authAndLogin } from '../../redux/reducer/authSlice'

// !Routing
const Stack = createStackNavigator()

export default function UnAuthenticatedHome() {

    const [login, { isLoading: isLoginLoading }] = useLoginMutation()
    const [register, { isLoading: isRegisterLoading }] = useRegisterMutation()
    const dispatch = useDispatch()

    const loginHandler = ({ email, password }) => {
        const payload = { email, password }
        login(payload)
            .unwrap()
            .then((res) => {
                console.log("Response: ", res)
                res.token && dispatch(authAndLogin({
                    isAuthenticated: true,
                    value: {
                        id: res.id,
                        firstName: res.firstName,
                        lastName: res.lastName,
                        email: res.email,
                    }
                }))
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
                res.token && dispatch(authAndLogin({
                    isAuthenticated: true,
                    value: {
                        id: res.id,
                        firstName: res.firstName,
                        lastName: res.lastName,
                        email: res.email,
                    }
                }))
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
