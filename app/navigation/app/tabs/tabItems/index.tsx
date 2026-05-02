import { IconSize, SvgIcon, SvgXmlIconNames } from '@/assets';
import { BaseText, BaseTextVariant } from '@/components';
import { colors } from '@/constants';

const HomeIcon = ({
  focused,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => (
  <SvgIcon
    name={
      focused ? SvgXmlIconNames.selectedHome : SvgXmlIconNames.unselectedHome
    }
    color={focused ? colors.black : colors.gray}
    size={IconSize.lg}
  />
);

const DoctorGroupsIcon = ({
  focused,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => (
  <SvgIcon
    name={
      focused
        ? SvgXmlIconNames.selectedGroups
        : SvgXmlIconNames.unselectedGroups
    }
    color={focused ? colors.black : colors.gray}
    size={IconSize.lg}
  />
);

const NotificationsIcon = ({
  focused,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => (
  <SvgIcon
    name={
      focused
        ? SvgXmlIconNames.selectedNotification
        : SvgXmlIconNames.unselectedNotification
    }
    color={focused ? colors.black : colors.gray}
    size={IconSize.lg}
  />
);

const HomeLabel = ({ focused, color }: { focused: boolean; color: string }) => (
  <BaseText
    variant={
      focused
        ? BaseTextVariant.manropeMedium12
        : BaseTextVariant.manropeRegular12
    }
    color={color}
  >
    Ana səhifə
  </BaseText>
);

const DoctorGroupsLabel = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => (
  <BaseText
    variant={
      focused
        ? BaseTextVariant.manropeMedium12
        : BaseTextVariant.manropeRegular12
    }
    color={color}
  >
    Qruplar
  </BaseText>
);

const NotificationsLabel = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => (
  <BaseText
    variant={
      focused
        ? BaseTextVariant.manropeMedium12
        : BaseTextVariant.manropeRegular12
    }
    color={color}
  >
    Bildirişlər
  </BaseText>
);

export {
  HomeIcon,
  HomeLabel,
  DoctorGroupsIcon,
  DoctorGroupsLabel,
  NotificationsIcon,
  NotificationsLabel,
};
