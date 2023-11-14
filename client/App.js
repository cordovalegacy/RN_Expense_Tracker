
// !Packages
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'

// !Components
import ReduxProvider from './providers/ReduxProvider'
import HomeContainer from './components/views/HomeContainer'

export default function App() {

  return (
    <ReduxProvider>
      <StatusBar style="light" />
        <NavigationContainer>
          <HomeContainer />
        </NavigationContainer>
    </ReduxProvider>
  )
}

