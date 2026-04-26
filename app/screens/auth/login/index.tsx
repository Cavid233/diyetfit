import { colors } from '@/constants';
import {
  BaseButton,
  BaseInput,
  BaseText,
  BaseTextVariant,
  Card,
} from '@/components';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IconSize, SvgIcon, SvgXmlIconNames } from '@/assets';
import { BaseButtonTypeEnum } from '@/types';
import { useCallback, useState } from 'react';
const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = useCallback(() => {
    setShowPassword(prev => !prev);
  }, [setShowPassword]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.teaGreen, colors.white]}
        style={styles.linearGradient}
      >
        <Card style={styles.cardContainer}>
          <BaseText
            variant={BaseTextVariant.manropeExtraBold36}
            color={colors.gunmetal}
            isCenter
          >
            DiyetFit
          </BaseText>
          <BaseText
            variant={BaseTextVariant.interMedium16}
            color={colors.black}
            isCenter
          >
            Xoş gəlmisiniz
          </BaseText>
          <View style={styles.formContainer}>
            <BaseInput
              placeholder="hello@sagewellness.com"
              value=""
              onChangeText={() => {}}
              label="Email Address"
              leftIcon={
                <SvgIcon
                  name={SvgXmlIconNames.email}
                  color={colors.graniteGray}
                />
              }
            />
            <BaseInput
              placeholder={'********'}
              value=""
              onChangeText={() => {}}
              label="Password"
              rightLabel="Forgot password?"
              leftIcon={
                <SvgIcon
                  name={SvgXmlIconNames.lock}
                  color={colors.graniteGray}
                />
              }
              rightIcon={
                <SvgIcon
                  name={
                    showPassword ? SvgXmlIconNames.eye : SvgXmlIconNames.eyeOff
                  }
                  size={IconSize.xl}
                  color={colors.graniteGray}
                />
              }
              onRightIconPress={handleShowPassword}
            />
            <BaseButton
              title="Sign In"
              onPress={() => {}}
              type={BaseButtonTypeEnum.primary}
              rightIcon={SvgXmlIconNames.arrowRight}
              rightIconSize={IconSize.sm}
            />
          </View>
        </Card>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    paddingTop: 90,
  },
  formContainer: {
    padding: 32,
    backgroundColor: colors.white,
    borderRadius: 32,
    gap: 24,
    marginTop: 40,
  },
});

export default LoginScreen;
