import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screenOptions } from '@/constants';
import { LoginScreen } from '@/screens';

export enum AUTH_ROUTE_NAMES {
  Login = 'Login',
}

export type AuthRootParamsList = {
  Login: undefined;
};

const Stack = createStackNavigator<AuthRootParamsList>();

const AuthStackNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={AUTH_ROUTE_NAMES.Login} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
