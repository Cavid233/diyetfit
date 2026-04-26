import { config } from '@/constants';
import React from 'react';
import { forwardRef, memo } from 'react';
import { Platform, StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import Animated, { AnimatedProps } from 'react-native-reanimated';

export interface BaseTextVariantValue {
  fontSize: number;
  fontFamily: string;
  color?: string;
  fontStyle?: TextStyle['fontStyle'];
}

interface BaseTextVariantKey {
//   playfairDisplayRegular36: BaseTextVariantValue;
//   playfairDisplaySemiBoldItalic24: BaseTextVariantValue;
//   playfairDisplayBold34: BaseTextVariantValue;
//   manropeExtraLight12: BaseTextVariantValue;
//   manropeExtraLight18: BaseTextVariantValue;
//   manropeExtraLight24: BaseTextVariantValue;
//   manropeExtraLight20: BaseTextVariantValue;
//   manropeRegular10: BaseTextVariantValue;
//   manropeRegular11: BaseTextVariantValue;
//   manropeRegular12: BaseTextVariantValue;
//   manropeRegular13: BaseTextVariantValue;
//   manropeRegular14: BaseTextVariantValue;
//   manropeRegular16: BaseTextVariantValue;
//   manropeMedium10: BaseTextVariantValue;
//   manropeMedium12: BaseTextVariantValue;
//   manropeMedium13: BaseTextVariantValue;
//   manropeMedium14: BaseTextVariantValue;
//   manropeMedium15: BaseTextVariantValue;
//   manropeMedium16: BaseTextVariantValue;
//   manropeSemiBold10: BaseTextVariantValue;
//   manropeSemiBold12: BaseTextVariantValue;
//   manropeSemiBold14: BaseTextVariantValue;
//   manropeSemiBold18: BaseTextVariantValue;  
//   manropeSemiBold24: BaseTextVariantValue;
//   manropeBold8: BaseTextVariantValue;
//   manropeBold11: BaseTextVariantValue;
//   manropeBold12: BaseTextVariantValue;
//   manropeBold13: BaseTextVariantValue;
//   manropeBold14: BaseTextVariantValue;
//   manropeBold18: BaseTextVariantValue;
//   manropeBold16: BaseTextVariantValue;
//   manropeBold20: BaseTextVariantValue;
//   manropeBold24: BaseTextVariantValue;
//   manropeBold30: BaseTextVariantValue;
//   manropeExtraBold11: BaseTextVariantValue;
//   manropeExtraBold30: BaseTextVariantValue;
//   manropeExtraBold48: BaseTextVariantValue;
//   manropeExtraBold60: BaseTextVariantValue;
}

export const BaseTextVariant: BaseTextVariantKey = {
//   playfairDisplayRegular36: {
//     fontSize: 36,
//     fontFamily: config.fonts.playfairDisplay.regular,
//   },
//   playfairDisplaySemiBoldItalic24: {
//     fontSize: 24,
//     fontFamily: config.fonts.playfairDisplay.semiBoldItalic,
//     fontStyle: Platform.OS === 'ios' ? 'italic' : 'normal',
//   },
//   playfairDisplayBold34: {
//     fontSize: 34,
//     fontFamily: config.fonts.playfairDisplay.bold,
//   },
//   manropeExtraLight12: {
//     fontSize: 12,
//     fontFamily: config.fonts.manrope.extraLight,
//   },
//   manropeExtraLight18: {
//     fontSize: 18,
//     fontFamily: config.fonts.manrope.extraLight,
//   },
//   manropeExtraLight24: {
//     fontSize: 24,
//     fontFamily: config.fonts.manrope.extraLight,
//   },
//   manropeExtraLight20: {
//     fontSize: 20,
//     fontFamily: config.fonts.manrope.extraLight,
//   },
//   manropeRegular10: {
//     fontSize: 10,
//     fontFamily: config.fonts.manrope.regular,
//   },
//   manropeRegular12: {
//     fontSize: 12,
//     fontFamily: config.fonts.manrope.regular,
//   },
//   manropeRegular11: {
//     fontSize: 11,
//     fontFamily: config.fonts.manrope.regular,
//   },
//   manropeRegular13: {
//     fontSize: 13,
//     fontFamily: config.fonts.manrope.regular,
//   },
//   manropeRegular14: {
//     fontSize: 14,
//     fontFamily: config.fonts.manrope.regular,
//   },
//   manropeRegular16: {
//     fontSize: 16,
//     fontFamily: config.fonts.manrope.regular,
//   },
//   manropeMedium10: {
//     fontSize: 10,
//     fontFamily: config.fonts.manrope.medium,
//   },
//   manropeMedium12: {
//     fontSize: 12,
//     fontFamily: config.fonts.manrope.medium,
//   },
//   manropeMedium13: {
//     fontSize: 13,
//     fontFamily: config.fonts.manrope.medium,
//   },
//   manropeMedium14: {
//     fontSize: 14,
//     fontFamily: config.fonts.manrope.medium,
//   },
//   manropeMedium15: {
//     fontSize: 15,
//     fontFamily: config.fonts.manrope.medium,
//   },
//   manropeMedium16: {
//     fontSize: 16,
//     fontFamily: config.fonts.manrope.medium,
//   },
//   manropeBold8: {
//     fontSize: 8,
//     fontFamily: config.fonts.manrope.bold,
//   },
//   manropeSemiBold10: {
//     fontSize: 10,
//     fontFamily: config.fonts.manrope.semiBold,
//   },
//   manropeSemiBold12: {
//     fontSize: 12,
//     fontFamily: config.fonts.manrope.semiBold,
//   },
//   manropeSemiBold14: {
//     fontSize: 14,
//     fontFamily: config.fonts.manrope.semiBold,
//   },
//   manropeSemiBold18: {
//     fontSize: 18,
//     fontFamily: config.fonts.manrope.semiBold,
//   },
//   manropeSemiBold24: {
//     fontSize: 24,
//     fontFamily: config.fonts.manrope.semiBold,
//   },
//   manropeBold11: {
//     fontSize: 11,
//     fontFamily: config.fonts.manrope.bold,
//   },
//   manropeBold12: {
//     fontSize: 12,
//     fontFamily: config.fonts.manrope.bold,
//   },
//   manropeBold13: {
//     fontSize: 13,
//     fontFamily: config.fonts.manrope.bold,
//   },
//   manropeBold14: {
//     fontSize: 14,
//     fontFamily: config.fonts.manrope.bold,
//   },
//   manropeBold16: {
//     fontSize: 16,
//     fontFamily: config.fonts.manrope.bold,
//   },
//   manropeBold18: {
//     fontSize: 18,
//     fontFamily: config.fonts.manrope.bold,
//   },
//   manropeBold20: {
//     fontSize: 20,
//     fontFamily: config.fonts.manrope.bold,
//   },
//   manropeBold24: {
//     fontSize: 24,
//     fontFamily: config.fonts.manrope.bold,
//   },
//   manropeBold30: {
//     fontSize: 30,
//     fontFamily: config.fonts.manrope.bold,
//   },
//   manropeExtraBold11: {
//     fontSize: 11,
//     fontFamily: config.fonts.manrope.extraBold,
//   },
//   manropeExtraBold30: {
//     fontSize: 30,
//     fontFamily: config.fonts.manrope.extraBold,
//   },
//   manropeExtraBold48: {
//     fontSize: 48,
//     fontFamily: config.fonts.manrope.extraBold,
//   },
//   manropeExtraBold60: {
//     fontSize: 60,
//     fontFamily: config.fonts.manrope.extraBold,
//   },
};

export interface BaseTextProps extends AnimatedProps<TextProps> {
  variant?: BaseTextVariantValue;
  italic?: boolean;
  color?: string;
  isCenter?: boolean;
  isFlex_1?: boolean;
  opacityValue?: number;
}

const BaseText = forwardRef<Text, BaseTextProps>(
  (
    {
      children,
      variant = BaseTextVariant.manropeRegular14,
      italic = false,
      color,
      isCenter = false,
      isFlex_1 = false,
      style,
      opacityValue,
      ...rest
    },
    ref,
  ) => {
    return (
      <Animated.Text
        ref={ref}
        style={[
          styles.baseStyle,
          !!color?.length && { color },
          variant && variant,
          italic && styles.italic,
          isCenter && styles.alignCenter,
          isFlex_1 && styles.flex1,
          style,
          !!opacityValue && { opacity: opacityValue },
        ]}
        {...rest}
      >
        {children}
      </Animated.Text>
    );
  },
);

const styles = StyleSheet.create({
  baseStyle: {
    ...BaseTextVariant.manropeRegular14,
    color: 'black',
  },
  italic: { fontStyle: 'italic' },
  alignCenter: { textAlign: 'center' },
  flex1: { flex: 1 },
});

export default memo(BaseText);
