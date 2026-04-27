import { colors } from '@/constants';
import {
  BaseButton,
  BaseInput,
  BaseText,
  BaseTextVariant,
  Card,
} from '@/components';
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IconSize, SvgIcon, SvgXmlIconNames } from '@/assets';
import { BaseButtonTypeEnum } from '@/types';
import { useCallback, useState } from 'react';
import { AUTH_ROUTE_NAMES } from '@/navigation';
import { useAppNavigation } from '@/hooks';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useAppNavigation();
  const handleShowPassword = useCallback(() => {
    setShowPassword(prev => !prev);
  }, [setShowPassword]);

  const handleForgotPassword = useCallback(() => {
    navigation.navigate(AUTH_ROUTE_NAMES.ForgotPassword);
  }, [navigation]);

  const handleDismissKeyboard = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={handleDismissKeyboard}
      accessible={false}
    >
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
              Daxil Olun
            </BaseText>
            <BaseText
              variant={BaseTextVariant.interMedium16}
              color={colors.black}
              isCenter
              style={styles.descriptionText}
            >
              Xoş gəlmisiniz
            </BaseText>
            <View style={styles.formContainer}>
              <BaseInput
                placeholder="example@example.com"
                value=""
                onChangeText={() => {}}
                label="E-poçt"
                leftIcon={
                  <SvgIcon
                    name={SvgXmlIconNames.email}
                    color={colors.graniteGray}
                  />
                }
                inputProps={{
                  keyboardType: 'email-address',
                }}
              />
              <BaseInput
                placeholder={'********'}
                value=""
                onChangeText={() => {}}
                label="Şifrə"
                rightLabel="Şifrəni unutdunuz?"
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
                    size={IconSize.lg}
                    color={colors.graniteGray}
                  />
                }
                onRightIconPress={handleShowPassword}
                inputProps={{
                  secureTextEntry: !showPassword,
                }}
                onRightLabelPress={handleForgotPassword}
              />
              <BaseButton
                title="Daxil Olun"
                onPress={() => {}}
                type={BaseButtonTypeEnum.primary}
                rightIcon={SvgXmlIconNames.arrowRight}
                rightIconSize={IconSize.sm}
              />
            </View>
          </Card>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
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
  descriptionText: {
    marginTop: 16,
  },
});

export default LoginScreen;
