
// !Packages
import { useState, useEffect } from 'react'
import { Pressable, Text, View, Keyboard, ScrollView, SafeAreaView, ActivityIndicator, Image } from 'react-native'

// !Styles
import { logReg } from '../styles/logReg'

// !Components
import AppWrapper from '../constants/AppWrapper'
import InputGroup from '../components/InputGroup'
import RedirectButton from '../components/RedirectButton'

export default function Register({ isLoading, registrationHandler }) {

    const [isKeyboardVisible, setKeyboardVisible] = useState(false)

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true)
            }
        )
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false)
            }
        )

        return () => {
            keyboardDidHideListener.remove()
            keyboardDidShowListener.remove()
        }
    }, [])

    const [registration, setRegistration] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const changeHandler = (fieldName, value) => {
        setRegistration((prevRegistration) => ({
            ...prevRegistration,
            [fieldName]: value,
        }));
    }

    if (isLoading) {
        return (
            <SafeAreaView style={[logReg.screen, logReg.loadingScreen]}>
                <View style={[logReg.screen, logReg.loadingScreen, { width: "100%", position: "relative" }]}>
                    <View style={logReg.loadingContainer}>
                        <Text style={logReg.loadingText}>Takeoff..in: 3, 2, 1 🚀</Text>
                        <ActivityIndicator size={'large'} color={"white"} style={{ marginTop: 30 }} />
                    </View>
                    <Image style={[logReg.screen, logReg.loadingGif]} source={require('../assets/loadingGif.gif')} />
                </View>
            </SafeAreaView>
        )
    }

    return (
        <AppWrapper>
            <ScrollView
                contentContainerStyle={{
                    alignItems: "center"
                }}
                style={[
                    logReg.formContainerScroll,
                    isKeyboardVisible
                        ? { marginVertical: 10 }
                        : { marginTop: 50 }
                ]}>
                {!isKeyboardVisible && <Text style={logReg.title}>Register</Text>}
                <View style={[logReg.main, logReg.mainBackground]}>
                    <View style={[logReg.form, { marginTop: -10 }]}>
                        <InputGroup
                            label={"First Name:"}
                            inputConfig={{
                                placeholder: "John",
                                secureTextEntry: false,
                                onChangeText: (text) => changeHandler("firstName", text)
                            }}
                        />
                        <InputGroup
                            label={"Last Name:"}
                            inputConfig={{
                                placeholder: "Doe",
                                secureTextEntry: false,
                                onChangeText: (text) => changeHandler("lastName", text)
                            }}
                        />
                        <InputGroup
                            label={"Email Address:"}
                            inputConfig={{
                                placeholder: "user123@gmail.com",
                                secureTextEntry: false,
                                onChangeText: (text) => changeHandler("email", text)
                            }}
                        />
                        <InputGroup
                            label={"Password:"}
                            inputConfig={{
                                placeholder: "**********",
                                secureTextEntry: true,
                                onChangeText: (text) => changeHandler("password", text)
                            }}
                        />
                        <InputGroup
                            label={"Confirm Password:"}
                            inputConfig={{
                                placeholder: "**********",
                                secureTextEntry: true,
                                onChangeText: (text) => changeHandler("confirmPassword", text)
                            }}
                        />
                        <View style={logReg.inputGroup}>
                            <Pressable onPress={() => registrationHandler(registration)}>
                                <View style={logReg.button}>
                                    <Text style={logReg.buttonText}>Register</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <RedirectButton
                        redirectUrl={"Login"}
                        textStyles={logReg.noAccount}
                        viewStyles={logReg.noAccountContainer}
                        pressableStyles={[logReg.noAccountButton, isKeyboardVisible && { marginBottom: 50 }]}>
                        Already have an account? Login!
                    </RedirectButton>
                </View>
            </ScrollView>
        </AppWrapper>
    )
}
