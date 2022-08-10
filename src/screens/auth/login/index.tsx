import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { ScreenNames } from '~routes';
import styles from './styles';

const Login = ({ navigation }: NativeStackScreenProps<any>) => {
  return (
    <ScreenWrapper statusBarColor='red'>
      <View style={styles.container}>
        <Button
          onPress={() => navigation.navigate(ScreenNames.FORGOT_PASSWORD)}
          mode='contained' >Go To Forgot Password</Button>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
