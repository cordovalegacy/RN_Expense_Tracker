
// !Packages
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    useRegisterMutation,
    useLoginMutation
} from '../../redux/api/auth/authApiSlice'
import { Pressable, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { showLoad } from '../../utils/functions/showLoad'
import { authAndLogin } from '../../redux/reducer/authSlice'
import { createStackNavigator } from '@react-navigation/stack'

// !Components
import Login from '../../screens/Login'
import Register from '../../screens/Register'

// !Routing
const Stack = createStackNavigator()

export default function UnAuthenticatedHome() {

    const dispatch = useDispatch()
    const [login] = useLoginMutation()
    const [register] = useRegisterMutation()
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation()

    const loginHandler = async ({ email, password }) => {
        const payload = { email, password }
        await showLoad(setIsLoading, 2000)
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
                setIsLoading(false)
                setIsError(true)
            })
    }

    const registrationHandler = async({ firstName, lastName, email, password, confirmPassword }) => {
        const payload = { firstName, lastName, email, password, confirmPassword }
        await showLoad(setIsLoading, 3000)
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
                setIsLoading(false)
                setIsError(true)
            })
    }

    if(isError){
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "stretch", backgroundColor :"#000041"}}>
                <Text style={{textAlign: "center", fontSize: 20, color: "white", width: "80%", marginLeft: "10%"}}>Something went wrong with authenticating your account.</Text>
                <Pressable onPress={() => setIsError(false)}>
                    <View>
                <Text style={{textAlign: "center", fontSize: 25, color: "white", marginTop: 20}}>Please {"\n"}<Text style={{color: "gold"}}>Try Again</Text></Text>
                    </View>
                </Pressable>
            </View>
        )
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
                        isLoading={isLoading}
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
                        isLoading={isLoading}
                        registrationHandler={registrationHandler}
                    />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    )
}
