
// !Packages
import { SafeAreaView, ImageBackground, Platform } from 'react-native'

// !Styles
import { app } from '../styles/app'

export default function AppWrapper({ children }) {
    return (
        <SafeAreaView style={[app.screen, Platform.OS === "android" && {paddingTop: 40}]}>
            <ImageBackground
                style={app.imageBg}
                source={require('../assets/money-bg.jpg')}
                resizeMode='cover'>
                {children}
            </ImageBackground>
        </SafeAreaView>
    )
}
