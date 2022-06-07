import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {Button} from '~components';
import {ScreenNames} from '~routes';

const Login = ({navigation}: NativeStackScreenProps<any>) => {
  return (
    <ScreenWrapper>
      <View style={{flex: 1}}>
        <Text>Login Page</Text>
        <Button
          onPress={() => navigation.navigate(ScreenNames.FORGOT_PASSWORD)}>
          Go To Forgot Password
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
