import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { Input } from '~components';
import styles from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormValidation } from './utils';
import { Theme } from '~utils';
import { ABCsvg } from '~assets/svgs';
const Login = ({ navigation }: NativeStackScreenProps<any>) => {
  if (typeof HermesInternal === 'undefined') {
    console.log('Hermes is not enabled');
  } else {
    console.log('Hermes is enabled');
  }
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
          <ABCsvg />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
