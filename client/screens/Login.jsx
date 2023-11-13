
// !Packages
import { Pressable, Text, TextInput, View } from 'react-native'

// !Styles
import { logReg } from '../styles/logReg'

// !Components
import RedirectButton from '../components/RedirectButton'
import AppWrapper from '../constants/AppWrapper'

export default function Login() {
    return (
        <AppWrapper>
            <View style={logReg.formContainer}>
                <Text style={logReg.title}>Login</Text>
                <View style={[logReg.main, logReg.mainBackground]}>
                    <View style={logReg.form}>
                        <View style={logReg.inputGroup}>
                            <Text style={logReg.label}>Email Address: </Text>
                            <TextInput
                                style={logReg.input}
                                placeholder="user123@gmail.com"
                            />
                        </View>
                        <View style={logReg.inputGroup}>
                            <Text style={logReg.label}>Password: </Text>
                            <TextInput
                                style={logReg.input}
                                placeholder="***********"
                            />
                        </View>
                        <View style={logReg.inputGroup}>
                            <Pressable>
                                <View style={logReg.button}>
                                    <Text style={logReg.buttonText}>Login</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <RedirectButton redirectUrl={"Register"} textStyles={logReg.noAccount} viewStyles={logReg.noAccountContainer} pressableStyles={logReg.noAccountButton}>
                        Don't have an account yet? Register!
                    </RedirectButton>
                </View>
            </View>
        </AppWrapper>
    )
}