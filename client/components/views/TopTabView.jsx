
// !Packages
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from "@react-navigation/native"
import { addNewTransaction } from '../../redux/reducer/transactionSlice'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useAddNewTransactionMutation } from '../../redux/api/transaction/transactionApiSlice'

// !Components
import Income from '../../screens/Income'
import Expenses from '../../screens/Expenses'

// !Routing
const TopTab = createMaterialTopTabNavigator()

const TopTabView = () => {
    
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const loggedInUser = useSelector((state) => state.auth.value.value.id)
    const [newTransaction, { isLoading }] = useAddNewTransactionMutation()

    const transactionSubmitHandler = (payload) => {
        console.log("Top Tab View: ", loggedInUser)
        newTransaction(payload, loggedInUser)
            .unwrap()
            .then((res) => {
                console.log("Response: ", res)
                navigation.navigate(
                    "ViewAll", 
                    res.type === "income" 
                    ? {
                        id: res.id,
                        name: res.name,
                        dueDate: res.dueDate,
                        description: res.description,
                        amount: res.amount,
                        type: res.type
                    }
                    :{
                        id: res.id,
                        name: res.name,
                        dueDate: res.dueDate,
                        description: res.description,
                        amount: res.amount,
                        type: "bill"
                    }
                    )
            })
            .catch((err) => {
                console.log("Error: ", err)
            })
    }

    return (
        <TopTab.Navigator screenOptions={{
            tabBarContentContainerStyle: { backgroundColor: "#000041" },
            tabBarLabelStyle: { fontWeight: "900" },
            tabBarPressOpacity: 80,
            tabBarActiveTintColor: "gold",
            tabBarInactiveTintColor: "white"
        }}>
            <TopTab.Screen
                name='Income'
            >
                {(props) => (
                    <Income
                        {...props}
                        transactionSubmitHandler={transactionSubmitHandler}
                        isLoading={isLoading}
                        user={loggedInUser}
                    />
                )}
            </TopTab.Screen>
            <TopTab.Screen
                name='Expenses'
            >
                {(props) => (
                    <Expenses
                        {...props}
                        transactionSubmitHandler={transactionSubmitHandler}
                        isLoading={isLoading}
                        user={loggedInUser}
                    />
                )}
            </TopTab.Screen>
        </TopTab.Navigator>
    )
}
export default TopTabView
