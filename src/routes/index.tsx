import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useSelector} from 'react-redux';
import {ForgotPasswordScreen, LoginScreen} from '../screens/auth';
import {selectIsLoggedIn} from '../store/slices/user/slice';

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();
const Routes = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
