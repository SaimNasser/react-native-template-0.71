import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import styles from './styles';

const ForgotPassword = ({ navigation }: NativeStackScreenProps<any>) => {
  return (
    <ScreenWrapper scrollType="keyboard">
      <View style={styles.container}>
        {/* <Button
          onPress={() => navigation.navigate(ScreenNames.LOGIN)}
          mode='contained' >Go To Login</Button> */}
      </View>
    </ScreenWrapper>
  );
};

export default ForgotPassword;
