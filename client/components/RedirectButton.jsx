
// !Packages
import { Pressable, View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function RedirectButton({ children, redirectUrl, viewStyles, pressableStyles, textStyles }) {

    const navigation = useNavigation()

    return (
        <Pressable
            onPress={() => navigation.navigate(redirectUrl)}
            style={
                ({ pressed }) => pressed
                    ? [pressableStyles, { opacity: 0.75 }]
                    : pressableStyles
            }>
            <View style={viewStyles}>
                <Text style={textStyles}>{children}</Text>
            </View>
        </Pressable>
    )
}
