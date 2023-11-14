
// !Packages
import { useState } from 'react'
import { Pressable, Text, View, ScrollView } from 'react-native'

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

    return (
        <AppWrapper>
            <ScrollView
                contentContainerStyle={{
                    alignItems: "center"
                }}
                style={[logReg.formContainerScroll, { marginTop: 20 }]}>
                {isLoading && <Text style={{ color: "white", marginBottom: -20 }}>...Loading</Text>}
                <Text style={logReg.title}>Login</Text>
                <View style={[logReg.main, logReg.mainBackground]}>
                    <View style={[logReg.form, { marginTop: -10 }]}>
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
                        textStyles={logReg.noAccount}
                        viewStyles={logReg.noAccountContainer}
                        pressableStyles={logReg.noAccountButton}>
                        Don't have an account? Register!
                    </RedirectButton>
                </View>
            </ScrollView>
        </AppWrapper>
    )
}