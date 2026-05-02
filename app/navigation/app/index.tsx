import { screenOptions } from '@/constants';
import { createStackNavigator } from '@react-navigation/stack';
// import { NavigatorScreenParams } from '@react-navigation/native';
import { NavigatorScreenParams } from '@react-navigation/native';
// import TabNavigator, { TabRootParamsList } from './tabs';
// import MainStackNavigator, { MainRootParamsList } from './stacks/main';
// import { MAIN_ROUTE_NAMES } from './stacks';
import {
  AuthStackNavigator,
  AuthRootParamsList,
  AUTH_ROUTE_NAMES,
  MainRootParamsList,
  MainStackNavigator,
} from './stacks';
import DoctorTabNavigator, { DoctorTabRootParamsList } from './tabs/doctor';
// import MainStackNavigator, { MainRootParamsList } from './stacks/main';

export enum ROOT_ROUTE_NAMES {
  Auth = 'Auth',
  Main = 'Main',
  DoctorTab = 'DoctorTab',
}

type RootRootParamsList = {
  Auth: NavigatorScreenParams<AuthRootParamsList>;

  DoctorTab: NavigatorScreenParams<DoctorTabRootParamsList>;
  Main: NavigatorScreenParams<MainRootParamsList>;
};

const Stack = createStackNavigator<RootRootParamsList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={ROOT_ROUTE_NAMES.DoctorTab}
        component={DoctorTabNavigator}
      />

      <Stack.Screen
        name={ROOT_ROUTE_NAMES.Main}
        component={MainStackNavigator}
      />
      <Stack.Screen
        name={ROOT_ROUTE_NAMES.Auth}
        component={AuthStackNavigator}
      />
    </Stack.Navigator>
  );
};

export type { RootRootParamsList, AuthRootParamsList };
export { AUTH_ROUTE_NAMES };
export default AppNavigation;
