
// !Packages
import { useSelector } from 'react-redux'

// !Components
import AuthenticatedHome from "./AuthenticatedHome"
import UnAuthenticatedHome from "./UnAuthenticatedHome"

export default function HomeContainer() {

    const loggedInUser = useSelector((state) => state.auth.value.isAuthenticated)
    console.log("User is authenticated: ", loggedInUser)

    return (
        <>
            {
                loggedInUser
                    ? <AuthenticatedHome />
                    : <UnAuthenticatedHome />
            }
        </>
    )
}
