import { screenOptions } from '@/constants';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DoctorStackNavigator, { DoctorRootParamsList } from './doctor';

export enum MAIN_ROUTE_NAMES {
  Doctor = 'Doctor',
}

export type MainRootParamsList = {
  Doctor: NavigatorScreenParams<DoctorRootParamsList>;
};

const Stack = createStackNavigator<MainRootParamsList>();

const MainStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={MAIN_ROUTE_NAMES.Doctor}
        component={DoctorStackNavigator}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
