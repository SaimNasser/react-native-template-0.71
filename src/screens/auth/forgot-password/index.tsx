import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { Appbar, Button, TextInput, useTheme } from 'react-native-paper';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { Spacer } from '~components';
import { ScreenNames } from '~routes';
import styles from './styles';


const ForgotPassword = ({ navigation }: NativeStackScreenProps<any>) => {
  const theme = useTheme()
  return (
    <ScreenWrapper statusBarColor={theme.colors.primary}>
      <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title="Forget Password" />
      </Appbar.Header>
      <View style={styles.container}>

        <TextInput placeholder='Email' mode='outlined'
          right={<TextInput.Icon name="eye" />}
          left={<TextInput.Icon name="email-outline" />}
          error={true}

        />
        <Spacer vertical={20} />
        <Button
          onPress={() => navigation.navigate(ScreenNames.LOGIN)}
          mode='contained' >Go To Login</Button>
      </View>
    </ScreenWrapper>
  );
};

export default ForgotPassword;
