
// !Packages
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import ReduxProvider from './providers/ReduxProvider'
import { NavigationContainer } from '@react-navigation/native'

// !Components
import AuthenticatedHome from './components/views/AuthenticatedHome'
import UnAuthenticatedHome from './components/views/UnAuthenticatedHome'

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <StatusBar style="light" />
      <ReduxProvider>
        <NavigationContainer>
          {
            isLoggedIn
              ? <AuthenticatedHome />
              : <UnAuthenticatedHome />
          }

        </NavigationContainer>
      </ReduxProvider>
    </>
  )
}

