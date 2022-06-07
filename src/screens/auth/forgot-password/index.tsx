import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {Button} from '~components';
import {ScreenNames} from '~routes';

const ForgotPassword = ({navigation}: NativeStackScreenProps<any>) => {
  return (
    <ScreenWrapper>
      <Text>ForgotPassword</Text>
      <Button onPress={() => navigation.navigate(ScreenNames.LOGIN)}>
        Go To Login Page
      </Button>
    </ScreenWrapper>
  );
};

export default ForgotPassword;
