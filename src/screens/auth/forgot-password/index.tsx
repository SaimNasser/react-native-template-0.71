import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { ScreenNames } from '~routes';
import styles from './styles';

const ForgotPassword = ({ navigation }: NativeStackScreenProps<any>) => {
  const theme = useTheme()
  return (
    <ScreenWrapper statusBarColor={theme.colors.primary} scrollType = "keyboard">
      <View style={styles.container}>
      <Text>soncjasn</Text>
      </View>
    </ScreenWrapper>
  );
};

export default ForgotPassword;
