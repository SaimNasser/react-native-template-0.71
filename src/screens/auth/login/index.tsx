import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { Input } from '~components';
import styles from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormValidation } from './utils';
import { Theme } from '~utils';

const Login = ({ navigation }: NativeStackScreenProps<any>) => {
  const {
    control,
    formState: { isValid },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(LoginFormValidation),
  });
  return (
    <ScreenWrapper statusBarColor={Theme.colors.primary} scrollType="keyboard">
      <View style={styles.container}>
        <View>
          <Input control={control} name="email" label={'Email'} />
          <Input control={control} name="password" label={'Password'} />
        </View>
        {/* <Button
          onPress={() => navigation.navigate(ScreenNames.FORGOT_PASSWORD)}
          mode="contained"
          disabled={!isValid}>
          Login
        </Button> */}
      </View>
    </ScreenWrapper>
  );
};

export default Login;
