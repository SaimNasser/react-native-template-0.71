import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Text } from 'react-native'
import { ScreenWrapper } from 'react-native-screen-wrapper'

const Login = ({ navigation }: NativeStackScreenProps<any>) => {
    return (<ScreenWrapper>
        <Text >Login Page</Text>
        <Text onPress={() => navigation.navigate("ForgotPassword")}>go to forgot-password</Text>
    </ScreenWrapper>)
}

export default Login