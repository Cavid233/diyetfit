import { BaseButton, BaseInput } from '@/components';
import { Alert, StyleSheet, View } from 'react-native';
import { IconSize, SvgIcon, SvgXmlIconNames } from '@/assets';
import { colors } from '@/constants';
import { BaseButtonTypeEnum } from '@/types';
import { useCallback, useState } from 'react';
import { useAppNavigation } from '@/hooks';
import { AUTH_ROUTE_NAMES } from '@/navigation';
import { AuthContainer } from '@/containers';

const ForgotPasswordScreen = () => {
  const navigation = useAppNavigation();
  const [email, setEmail] = useState('');

  const handleEmailChange = useCallback((value: string) => {
    setEmail(value);
  }, []);

  const handleSendCode = useCallback(() => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      Alert.alert('Xəta', 'Zəhmət olmasa e-poçt ünvanınızı daxil edin.');
      return;
    }

    navigation.navigate(AUTH_ROUTE_NAMES.OtpVerify, {
      email: trimmedEmail,
    });
  }, [email, navigation]);

  return (
    <AuthContainer
      title="Şifrəni Yeniləyin"
      description="E-poçt adresinizi daxil edin və biz sizə şifrəni yeniləmə kodunu göndərəcəyik."
      showHeader={true}
    >
      <View style={styles.formContainer}>
        <BaseInput
          placeholder="hello@sagewellness.com"
          value={email}
          onChangeText={handleEmailChange}
          label="Email Address"
          leftIcon={
            <SvgIcon name={SvgXmlIconNames.email} color={colors.graniteGray} />
          }
          inputProps={{
            keyboardType: 'email-address',
          }}
        />
        <BaseButton
          title="Kodu Göndər"
          onPress={handleSendCode}
          type={BaseButtonTypeEnum.primary}
          rightIcon={SvgXmlIconNames.arrowRight}
          rightIconSize={IconSize.sm}
        />
      </View>
    </AuthContainer>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 32,
    marginTop: 40,
    backgroundColor: colors.white,
    borderRadius: 32,
    gap: 24,
  },
});

// const ForgotPasswordScreen = withAuthContainer(ForgotPasswordScreenContent, {
//   title: 'Şifrəni Yeniləyin',
//   description:
//     'E-poçt adresinizi daxil edin və biz sizə şifrəni yeniləmə kodunu göndərəcəyik.',
//   showHeader: true,
// });

export default ForgotPasswordScreen;
