import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FC } from 'react';
import {
  DoctorGroupsScreen,
  DoctorHomeScreen,
  DoctorNotificationsScreen,
} from '@/screens';
import {
  DoctorGroupsIcon,
  DoctorGroupsLabel,
  HomeIcon,
  HomeLabel,
  NotificationsIcon,
  NotificationsLabel,
} from '../tabItems';
import { colors } from '@/constants';

export enum DOCTOR_TAB_ROUTE_NAMES {
  DoctorHome = 'DoctorHome',
  DoctorGroups = 'DoctorGroups',
  DoctorNotifications = 'DoctorNotifications',
}

export type DoctorTabRootParamsList = {
  DoctorHome: undefined;
  DoctorGroups: undefined;
  DoctorNotifications: undefined;
};

const Tab = createBottomTabNavigator<DoctorTabRootParamsList>();

const screenOptions = {
  headerShown: false,
  tabBarActiveTintColor: colors.forestCanopy,
};

const DoctorTabNavigator: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      initialRouteName={DOCTOR_TAB_ROUTE_NAMES.DoctorHome}
    >
      <Tab.Screen
        name={DOCTOR_TAB_ROUTE_NAMES.DoctorHome}
        component={DoctorHomeScreen}
        options={{
          title: 'Ana səhifə',
          tabBarIcon: HomeIcon,
          //   tabBarInactiveTintColor: colors.lightMode.neutral.neutral7,
          tabBarLabel: HomeLabel,
        }}
      />
      <Tab.Screen
        name={DOCTOR_TAB_ROUTE_NAMES.DoctorGroups}
        component={DoctorGroupsScreen}
        options={{
          title: 'Qruplar',
          tabBarIcon: DoctorGroupsIcon,
          tabBarLabel: DoctorGroupsLabel,
        }}
      />
      <Tab.Screen
        name={DOCTOR_TAB_ROUTE_NAMES.DoctorNotifications}
        component={DoctorNotificationsScreen}
        options={{
          title: 'Bildirişlər',
          tabBarIcon: NotificationsIcon,
          tabBarLabel: NotificationsLabel,
        }}
      />
    </Tab.Navigator>
  );
};

export default DoctorTabNavigator;
