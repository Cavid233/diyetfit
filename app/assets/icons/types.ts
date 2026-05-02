import { SvgProps } from 'react-native-svg';
import { StyleProp, ViewStyle } from 'react-native';

export enum SvgXmlIconNames {
  email = 'email',
  lock = 'lock',
  eyeOff = 'eyeOff',
  arrowRight = 'arrowRight',
  eye = 'eye',
  goBack = 'goBack',
  selectedHome = 'selectedHome',
  unselectedHome = 'unselectedHome',
  clients = 'clients',
  groups = 'groups',
  reviews = 'reviews',
  newClient = 'newClient',
  newGroup = 'newGroup',
  broadcast = 'broadcast',
  unselectedGroups = 'unselectedGroups',
  selectedGroups = 'selectedGroups',
  unselectedNotification = 'unselectedNotification',
  selectedNotification = 'selectedNotification',
}

export interface SvgXmlProps extends SvgProps {
  name: SvgXmlIconNames | undefined;
  size?: {
    width: number | string;
    height: number | string;
  };
  width?: number | string;
  height?: number | string;
  color?: string;
  style?: StyleProp<ViewStyle>;
}
