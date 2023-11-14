
// !Packages
import { useState, useEffect } from 'react'
import { Pressable, Text, View, Keyboard, ScrollView } from 'react-native'

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
        console.log(fieldName, value)
        setRegistration((prevRegistration) => ({
            ...prevRegistration,
            [fieldName]: value,
        }));
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
                {isLoading && <Text style={{ color: "white", marginBottom: -20 }}>...Loading</Text>}
                {!isKeyboardVisible && <Text style={logReg.title}>Register</Text>}
                <View style={[logReg.main, logReg.mainBackground]}>
                    <View style={[logReg.form, { marginTop: -10 }]}>
                        <InputGroup
                            label={"First Name:"}
                            placeholder={"John"}
                            onChange={(text) => changeHandler("firstName", text)}
                            secure={false}
                        />
                        <InputGroup
                            label={"Last Name:"}
                            placeholder={"Doe"}
                            onChange={(text) => changeHandler("lastName", text)}
                            secure={false}
                        />
                        <InputGroup
                            label={"Email Address:"}
                            placeholder={"user123@gmail.com"}
                            onChange={(text) => changeHandler("email", text)}
                            secure={false}
                        />
                        <InputGroup
                            label={"Password:"}
                            placeholder={"***********"}
                            onChange={(text) => changeHandler("password", text)}
                            secure={true}
                        />
                        <InputGroup
                            label={"Confirm Password:"}
                            placeholder={"***********"}
                            onChange={(text) => changeHandler("confirmPassword", text)}
                            secure={true}
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
                        pressableStyles={[logReg.noAccountButton, isKeyboardVisible && {marginBottom: 50}]}>
                        Already have an account? Login!
                    </RedirectButton>
                </View>
            </ScrollView>
        </AppWrapper>
    )
}
