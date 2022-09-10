import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { ScreenNames } from '~routes';
import styles from './styles';

const ForgotPassword = ({ navigation }: NativeStackScreenProps<any>) => {
  const theme = useTheme()
  return (
    <ScreenWrapper statusBarColor={theme.colors.primary} scrollType = "keyboard">
      <View style={styles.container}>
        <Button
          onPress={() => navigation.navigate(ScreenNames.LOGIN)}
          mode='contained' >Go To Login</Button>
      </View>
    </ScreenWrapper>
  );
};

export default ForgotPassword;
