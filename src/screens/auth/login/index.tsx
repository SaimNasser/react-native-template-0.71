import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Button, TextInput, useTheme } from 'react-native-paper';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { Input } from '~components';
import { ScreenNames } from '~routes';
import styles from './styles';
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginFormValidation } from './utils';



const Login = ({ navigation }: NativeStackScreenProps<any>) => {
  const theme = useTheme()
  const { control, formState: { isValid } } = useForm({
    mode: 'all',
    resolver: yupResolver(LoginFormValidation)
  })
  return (
    <ScreenWrapper statusBarColor={theme.colors.primary} scrollType="keyboard">
      <View style={styles.container}>
        <View>
          <Input
            control={control}
            name='email'
            label={"Email"}
            left={<TextInput.Icon name="email-outline" />}
          />
          <Input
            control={control}
            name='password'
            label={"Password"}
            left={<TextInput.Icon name="lock" />}
            right={<TextInput.Icon name="eye" />}
          />
        </View>
        <Button
          onPress={() => navigation.navigate(ScreenNames.FORGOT_PASSWORD)}
          mode='contained'
          disabled={!isValid}
        >Login</Button>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
