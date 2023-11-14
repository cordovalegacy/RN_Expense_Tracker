
// !Packages
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'

// !Components
import ReduxProvider from './providers/ReduxProvider'
import AuthenticatedHome from './components/views/AuthenticatedHome'
import UnAuthenticatedHome from './components/views/UnAuthenticatedHome'

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <ReduxProvider>
      <StatusBar style="light" />
        <NavigationContainer>
          {
            isLoggedIn
              ? <AuthenticatedHome />
              : <UnAuthenticatedHome
                setIsLoggedIn={setIsLoggedIn}
              />
          }
        </NavigationContainer>
    </ReduxProvider>
  )
}

