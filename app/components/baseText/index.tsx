import { config } from '@/constants';
import React from 'react';
import { forwardRef, memo } from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import Animated, { AnimatedProps } from 'react-native-reanimated';

export interface BaseTextVariantValue {
  fontSize: number;
  fontFamily: string;
  color?: string;
  fontStyle?: TextStyle['fontStyle'];
}

interface BaseTextVariantKey {
  interRegular14: BaseTextVariantValue;
  interMedium16: BaseTextVariantValue;
  manropeRegular14: BaseTextVariantValue;
  manropeBold18: BaseTextVariantValue;
  manropeExtraBold36: BaseTextVariantValue;
}

export const BaseTextVariant: BaseTextVariantKey = {
  manropeRegular14: {
    fontSize: 14,
    fontFamily: config.fonts.manrope.regular,
  },
  interRegular14: {
    fontSize: 14,
    fontFamily: config.fonts.inter.regular,
  },
  interMedium16: {
    fontSize: 16,
    fontFamily: config.fonts.inter.medium,
  },
  manropeBold18: {
    fontSize: 18,
    fontFamily: config.fonts.manrope.bold,
  },
  manropeExtraBold36: {
    fontSize: 36,
    fontFamily: config.fonts.manrope.extraBold,
  },
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
