import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Text } from 'react-native'
import { ScreenWrapper } from 'react-native-screen-wrapper'

const ForgotPassword = ({ navigation }: NativeStackScreenProps<any>) => {
    return (<ScreenWrapper>
        <Text >ForgotPassword</Text>
        <Text onPress={() => navigation.navigate("Login")}>go to login</Text>
    </ScreenWrapper>)
}

export default ForgotPassword