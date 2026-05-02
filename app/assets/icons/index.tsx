import { colors } from '@/constants';
import { SvgXmlIconNames, SvgXmlProps } from './types';
import { SvgXml } from 'react-native-svg';
import EmailIcon from './email';
import LockIcon from './lock';
import EyeOffIcon from './eye-off';
import ArrowRightIcon from './arrow-right';
import EyeIcon from './eye';
import GoBackIcon from './go-back';
import UnselectedHomeIcon from './unselected-home';
import SelectedHomeIcon from './selected-home';
import ClientsIcon from './clients';
import GroupsIcon from './groups';
import ReviewsIcon from './reviews';
import NewClientIcon from './new-client';
import NewGroupIcon from './new-group';
import BroadcastIcon from './broadcast';

import UnselectedGroupsIcon from './unselected-groups';
import SelectedGroupsIcon from './selected-groups';
import UnselectedNotificationIcon from './unselected-notification';
import SelectedNotificationIcon from './selected-notification';

export interface IconSize {
  width: number;
  height: number;
}

export const IconSize = {
  xxs: {
    width: 10,
    height: 10,
  },
  xs: {
    width: 12,
    height: 12,
  },
  xsm: {
    width: 14,
    height: 14,
  },
  sm: {
    width: 16,
    height: 16,
  },
  xmd: {
    width: 18,
    height: 18,
  },
  md: {
    width: 20,
    height: 20,
  },
  // 22x22
  xmd22: {
    width: 22,
    height: 22,
  },
  lg: {
    width: 24,
    height: 24,
  },
  xlg: {
    width: 28,
    height: 28,
  },
  xl: {
    width: 32,
    height: 32,
  },
  xxl: {
    width: 40,
    height: 40,
  },
  xxxl: {
    width: 48,
    height: 48,
  },
};

const getIcon = (name: SvgXmlIconNames | undefined): string | null => {
  if (!name) return null;
  switch (name) {
    case SvgXmlIconNames.email:
      return EmailIcon;
    case SvgXmlIconNames.lock:
      return LockIcon;
    case SvgXmlIconNames.eyeOff:
      return EyeOffIcon;
    case SvgXmlIconNames.arrowRight:
      return ArrowRightIcon;
    case SvgXmlIconNames.eye:
      return EyeIcon;
    case SvgXmlIconNames.goBack:
      return GoBackIcon;
    case SvgXmlIconNames.unselectedHome:
      return UnselectedHomeIcon;
    case SvgXmlIconNames.selectedHome:
      return SelectedHomeIcon;
    case SvgXmlIconNames.clients:
      return ClientsIcon;
    case SvgXmlIconNames.groups:
      return GroupsIcon;
    case SvgXmlIconNames.reviews:
      return ReviewsIcon;

    case SvgXmlIconNames.newClient:
      return NewClientIcon;
    case SvgXmlIconNames.newGroup:
      return NewGroupIcon;
    case SvgXmlIconNames.broadcast:
      return BroadcastIcon;
    case SvgXmlIconNames.unselectedGroups:
      return UnselectedGroupsIcon;
    case SvgXmlIconNames.selectedGroups:
      return SelectedGroupsIcon;
    case SvgXmlIconNames.unselectedNotification:
      return UnselectedNotificationIcon;
    case SvgXmlIconNames.selectedNotification:
      return SelectedNotificationIcon;
  }
};

const SvgIcon = ({ name, size, width, height, color, style }: SvgXmlProps) => {
  const icon = getIcon(name);
  if (!icon) {
    return null;
  }

  const props = {
    ...(style && { style }),
    ...size,
    ...(height && { height }),
    ...(width && { width }),
    preserveAspectRatio: 'xMidYMid meet',
    color: color || colors.black,
  };

  return <SvgXml xml={icon} {...props} />;
};

export { SvgXmlIconNames, SvgIcon };
export type { SvgXmlProps };
