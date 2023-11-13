
// !Packages
import { useState, useEffect } from 'react'
import { Pressable, Text, View, Keyboard } from 'react-native'

// !Styles
import { logReg } from '../styles/logReg'

// !Components
import AppWrapper from '../constants/AppWrapper'
import InputGroup from '../components/InputGroup'
import RedirectButton from '../components/RedirectButton'

export default function Login({ isLoading, loginHandler }) {

    return (
        <AppWrapper>
            <View style={logReg.formContainer}>
                <Text style={logReg.title}>Login</Text>
                <View style={[logReg.main, logReg.mainBackground]}>
                    <View style={logReg.form}>
                        <InputGroup label={"Email Address:"} placeholder={"user123@gmail.com"} />
                        <InputGroup label={"Password:"} placeholder={"***********"} />
                        <View style={logReg.inputGroup}>
                            <Pressable>
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
                        Don't have an account yet? Register!
                    </RedirectButton>
                </View>
            </View>
        </AppWrapper>
    )
}