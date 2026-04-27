import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screenOptions } from '@/constants';
import { ForgotPasswordScreen, LoginScreen, OtpVerifyScreen } from '@/screens';

export enum AUTH_ROUTE_NAMES {
  Login = 'Login',
  ForgotPassword = 'ForgotPassword',
  OtpVerify = 'OtpVerify',
}

export type AuthRootParamsList = {
  Login: undefined;
  ForgotPassword: undefined;
  OtpVerify: {
    email: string;
  };
};

const Stack = createStackNavigator<AuthRootParamsList>();

const AuthStackNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={AUTH_ROUTE_NAMES.Login} component={LoginScreen} />
      <Stack.Screen
        name={AUTH_ROUTE_NAMES.ForgotPassword}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={AUTH_ROUTE_NAMES.OtpVerify}
        component={OtpVerifyScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
