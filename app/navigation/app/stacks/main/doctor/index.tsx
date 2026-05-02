import { screenOptions } from '@/constants';
import { DoctorHomeScreen } from '@/screens';
import { createStackNavigator } from '@react-navigation/stack';
import { FC } from 'react';

export type DoctorRootParamsList = {
  DoctorHome: undefined;
  DoctorGroups: undefined;
  DoctorNotifications: undefined;
};

export enum DOCTOR_ROUTE_NAMES {
  DoctorHome = 'DoctorHome',
  DoctorGroups = 'DoctorGroups',
  DoctorNotifications = 'DoctorNotifications',
}

const Stack = createStackNavigator<DoctorRootParamsList>();

const DoctorStackNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={DOCTOR_ROUTE_NAMES.DoctorHome}
    >
      <Stack.Screen
        name={DOCTOR_ROUTE_NAMES.DoctorHome}
        component={DoctorHomeScreen}
      />
    </Stack.Navigator>
  );
};

export default DoctorStackNavigator;
