
// !Packages
import { useState } from 'react'
import { Pressable, Text, View, ScrollView, ActivityIndicator, ImageBackground, SafeAreaView, Image } from 'react-native'

// !Styles
import { logReg } from '../styles/logReg'

// !Components
import AppWrapper from '../constants/AppWrapper'
import InputGroup from '../components/InputGroup'
import RedirectButton from '../components/RedirectButton'

export default function Login({ isLoading, loginHandler }) {

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const changeHandler = (fieldName, value) => {
        setLogin((prevLogin) => ({
            ...prevLogin,
            [fieldName]: value,
        }));
    }

    if (isLoading) {
        return (
            <SafeAreaView style={[logReg.screen, logReg.loadingScreen]}>
                <View style={[logReg.screen, logReg.loadingScreen, { width: "100%", position: "relative" }]}>
                    <View style={logReg.loadingContainer}>
                        <Text style={logReg.loadingText}>Authenticating...</Text>
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
                style={[logReg.formContainerScroll, { marginTop: 20 }]}>
                <Text style={logReg.title}>Login</Text>
                <View style={[logReg.main, logReg.mainBackground]}>
                    <View style={[logReg.form, { marginTop: -10 }]}>
                        <InputGroup
                            label={"Email Address:"}
                            optionalLabelStyles={logReg.label}
                            optionalInputStyles={logReg.input}
                            inputConfig={{
                                placeholder: "user123@gmail.com",
                                secureTextEntry: false,
                                onChangeText: (text) => changeHandler("email", text)
                            }}
                        />
                        <InputGroup
                            label={"Password:"}
                            optionalLabelStyles={[logReg.label, { marginTop: 0 }]}
                            optionalInputStyles={logReg.input}
                            inputConfig={{
                                placeholder: "**********",
                                secureTextEntry: true,
                                onChangeText: (text) => changeHandler("password", text)
                            }}
                        />
                        <View style={logReg.inputGroup}>
                            <Pressable onPress={() => loginHandler(login)}>
                                <View style={logReg.button}>
                                    <Text style={logReg.buttonText}>Login</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <RedirectButton
                        redirectUrl={"Register"}
                        textStyles={[logReg.noAccount, { fontSize: 20 }]}
                        viewStyles={logReg.noAccountContainer}
                        pressableStyles={logReg.noAccountButton}>
                        Don't have an account? Register!
                    </RedirectButton>
                </View>
            </ScrollView>
        </AppWrapper>
    )
}