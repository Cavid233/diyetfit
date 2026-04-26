import { config } from '@/constants';
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  StyleProp,
} from 'react-native';
import BaseText, { BaseTextVariant, BaseTextVariantValue } from '../baseText';
import { useMemo } from 'react';
import { colors } from '@/constants';
import { IconSize, SvgIcon, SvgXmlIconNames } from '@/assets';
import { BaseButtonTypeEnum } from '@/types';

const {
  button: { activeOpacity },
} = config;

interface IBaseButtonProps extends TouchableOpacityProps {
  title: string;
  type: BaseButtonTypeEnum;
  onPress: () => void;
  textVariant?: BaseTextVariantValue;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  leftIcon?: SvgXmlIconNames;
  rightIcon?: SvgXmlIconNames;
  leftIconColor?: string;
  rightIconColor?: string;
  rightIconSize?: IconSize;
  leftIconSize?: IconSize;
}

const BaseButton: React.FC<IBaseButtonProps> = ({
  title,
  textVariant = BaseTextVariant.manropeBold18,
  type = BaseButtonTypeEnum.primary,
  onPress,
  style,
  disabled = false,
  leftIcon,
  rightIcon,
  leftIconColor,
  rightIconColor,
  rightIconSize = IconSize.md,
  leftIconSize = IconSize.md,
  ...rest
}) => {
  const buttonTypeStyle = useMemo((): ViewStyle => {
    switch (type) {
      case BaseButtonTypeEnum.primary:
        return styles.primaryStyle;
      case BaseButtonTypeEnum.secondary:
        return styles.secondaryStyle;
    //   case BaseButtonTypeEnum.tertiary:
    //     return styles.tertiaryStyle;
      // case BaseButtonTypeEnum.transparent:
      //   return styles.transparentStyle;
      // case BaseButtonTypeEnum.warning:
      //   return styles.warningStyle;
      default:
        return {};
    }
  }, [type]);
  const buttonTextTypeStyle = useMemo((): TextStyle => {
    switch (type) {
      case BaseButtonTypeEnum.primary:
        return styles.primaryTextStyle;
      case BaseButtonTypeEnum.secondary:
        return styles.secondaryTextStyle;
    //   case BaseButtonTypeEnum.tertiary:
    //     return styles.tertiaryTextStyle;
      // case BaseButtonTypeEnum.transparent:
      //   return styles.transparentTextStyle;
      // case BaseButtonTypeEnum.warning:
      //   return styles.warningTextStyle;
      default:
        return {};
    }
  }, [type]);

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[
        styles.container,
        styles.baseButtonStyles,
        buttonTypeStyle,
        style,
        disabled && styles.disabledStyle,
      ]}
      onPress={onPress}
      {...rest}
    >
      {leftIcon && (
        <SvgIcon
          name={leftIcon}
          color={leftIconColor || colors.white}
          size={leftIconSize}
        />
      )}
      <BaseText variant={textVariant} style={buttonTextTypeStyle}>
        {title}
      </BaseText>
      {rightIcon && (
        <SvgIcon
          name={rightIcon}
          color={rightIconColor || colors.white}
          size={rightIconSize}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  baseButtonStyles: {
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryStyle: {
    backgroundColor: colors.hunterGreen,
  },
  secondaryStyle: {
    backgroundColor: 'transparent',
  },
  tertiaryStyle: {
    // backgroundColor: colors.beachGreen,
  },
  primaryTextStyle: {
    color: colors.white,
  },
  secondaryTextStyle: {
    // color: colors.stormMist,
  },
  tertiaryTextStyle: {
    // color: colors.white,
  },
  transparentStyle: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    // borderColor: colors.main.blue,
  },
  transparentTextStyle: {
    // color: colors.main.blue,
  },
  warningStyle: {
    // backgroundColor: colors.main.darkRed,
  },
  warningTextStyle: {
    // color: colors.main.white,
  },
  disabledStyle: {
    // backgroundColor: colors.main.coolGray,
    // borderColor: colors.main.coolGray,
  },
});

export default BaseButton;
