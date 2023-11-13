// !Packages
import { Pressable, Text, View } from 'react-native'

// !Styles
import { logReg } from '../styles/logReg'

// !Components
import AppWrapper from '../constants/AppWrapper'
import InputGroup from '../components/InputGroup'
import RedirectButton from '../components/RedirectButton'

export default function Register() {
    return (
        <AppWrapper>
            <View style={[logReg.formContainer, { flex: 0.9, marginTop: 60 }]}>
                <Text style={logReg.title}>Register</Text>
                <View style={[logReg.main, logReg.mainBackground]}>
                    <View style={logReg.form}>
                        <InputGroup label={"First Name:"} placeholder={"John"} />
                        <InputGroup label={"Last Name:"} placeholder={"Doe"} />
                        <InputGroup label={"Email Address:"} placeholder={"user123@gmail.com"} />
                        <InputGroup label={"Password:"} placeholder={"***********"} />
                        <InputGroup label={"Confirm Password:"} placeholder={"***********"} />
                        <View style={logReg.inputGroup}>
                            <Pressable>
                                <View style={logReg.button}>
                                    <Text style={logReg.buttonText}>Login</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <RedirectButton
                        redirectUrl={"Login"}
                        textStyles={logReg.noAccount}
                        viewStyles={logReg.noAccountContainer}
                        pressableStyles={logReg.noAccountButton}>
                        Already have an account? Login!
                    </RedirectButton>
                </View>
            </View>
        </AppWrapper>
    )
}
