import { StackNavigationOptions } from '@react-navigation/stack';
import { config } from '../config';

export const screenOptions: StackNavigationOptions = {
  headerShown: false,
  gestureResponseDistance: config.screenWidth / 1.3,
  animation: 'slide_from_right',
};
