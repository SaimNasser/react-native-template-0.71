import {
  createNavigationContainerRef,
  NavigationContainer
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Appbar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '~store/slices/user';
import { ForgotPasswordScreen, LoginScreen } from '../screens/auth';
import ScreenNames from './routes';

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();
const Routes = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          animation: "slide_from_right",
          header: ({ navigation, route: { name } }) => <Appbar.Header>
            {navigation.canGoBack() && <Appbar.BackAction onPress={navigation.goBack} />}
            <Appbar.Content title={name} />
          </Appbar.Header>
        }}>
        <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
        <Stack.Screen
          name={ScreenNames.FORGOT_PASSWORD}
          component={ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
export { default as ScreenNames } from './routes';
