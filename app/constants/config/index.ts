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
    inter: {
      light: 'Inter 18pt Light',
      regular: 'Inter 18pt Regular',
      medium: 'Inter 18pt Medium',
      semiBold: 'Inter 18pt SemiBold',
      bold: 'Inter 18pt Bold',
    },
  },
};

export { config };
