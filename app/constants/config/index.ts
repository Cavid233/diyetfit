import { Dimensions, Platform } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import Config from 'react-native-config';

// const {DEVELOPMENT_API_URL, PRODUCTION_API_URL} = Config;
const { DEVELOPMENT_API_URL } = Config;

const { width, height } = Dimensions.get('screen');

const statusBarHeight = initialWindowMetrics?.insets.top || 34;

const config = {
  // baseUrl: __DEV__ ? DEVELOPMENT_API_URL : PRODUCTION_API_URL,
  baseUrl: DEVELOPMENT_API_URL,
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  statusbarHeight: statusBarHeight,
  screenWidth: width,
  screenHeight: height,
  button: {
    hitSlop: 8,
    activeOpacity: 0.8,
  },
  fonts: {
    manrope: {
      regular: 'Manrope-Regular',
      bold: 'Manrope-Bold',
      extraBold: 'Manrope-ExtraBold',
      medium: 'Manrope-Medium',
    },
    inter: {
      extraBold: 'Inter_18pt-ExtraBold',
      bold: 'Inter_18pt-Bold',
      semiBold: 'Inter_18pt-SemiBold',
      medium: 'Inter_18pt-Medium',
      regular: 'Inter_18pt-Regular',
    },

  },
};

export { config };
