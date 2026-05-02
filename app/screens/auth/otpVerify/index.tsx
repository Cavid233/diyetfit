import { useCallback, useMemo, useRef, useState } from 'react';
import {
  Alert,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { IconSize, SvgXmlIconNames } from '@/assets';
import { BaseButton, BaseText, BaseTextVariant } from '@/components';
import { AuthContainer } from '@/containers';
import { colors } from '@/constants';
import { AuthRootParamsList } from '@/navigation';
import { BaseButtonTypeEnum } from '@/types';

const OTP_INPUT_LENGTH = 4;
const OTP_INPUT_KEYS = Array.from(
  { length: OTP_INPUT_LENGTH },
  (_, index) => `otp-input-${index}`,
);

const OtpVerifyScreen = () => {
  const route = useRoute<RouteProp<AuthRootParamsList, 'OtpVerify'>>();
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const [otpValues, setOtpValues] = useState<string[]>(
    Array.from({ length: OTP_INPUT_LENGTH }, () => ''),
  );
  const { email } = route.params;

  const isSubmitDisabled = useMemo(() => {
    return otpValues.some(value => !value);
  }, [otpValues]);

  const focusInput = useCallback((index: number) => {
    inputRefs.current[index]?.focus();
  }, []);

  const handleCodeChange = useCallback(
    (index: number, text: string) => {
      const sanitizedText = text.replace(/\D/g, '');

      setOtpValues(prev => {
        const nextValues = [...prev];

        if (!sanitizedText) {
          nextValues[index] = '';
          return nextValues;
        }

        const nextChars = sanitizedText
          .slice(0, OTP_INPUT_LENGTH - index)
          .split('');

        nextChars.forEach((char, offset) => {
          nextValues[index + offset] = char;
        });

        return nextValues;
      });

      if (!sanitizedText) {
        return;
      }

      const nextIndex = Math.min(
        index + sanitizedText.length,
        OTP_INPUT_LENGTH - 1,
      );

      focusInput(nextIndex);
    },
    [focusInput],
  );

  const handleKeyPress = useCallback(
    (
      index: number,
      event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    ) => {
      if (
        event.nativeEvent.key !== 'Backspace' ||
        otpValues[index] ||
        index < 1
      ) {
        return;
      }

      setOtpValues(prev => {
        const nextValues = [...prev];
        nextValues[index - 1] = '';
        return nextValues;
      });

      focusInput(index - 1);
    },
    [focusInput, otpValues],
  );

  const inputChangeHandlers = useMemo(() => {
    return OTP_INPUT_KEYS.map((_, index) => {
      return (text: string) => handleCodeChange(index, text);
    });
  }, [handleCodeChange]);

  const inputKeyPressHandlers = useMemo(() => {
    return OTP_INPUT_KEYS.map((_, index) => {
      return (event: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
        handleKeyPress(index, event);
    });
  }, [handleKeyPress]);

  const inputRefHandlers = useMemo(() => {
    return OTP_INPUT_KEYS.map((_, index) => {
      return (ref: TextInput | null) => {
        inputRefs.current[index] = ref;
      };
    });
  }, []);

  const handleSubmit = useCallback(() => {
    if (isSubmitDisabled) {
      Alert.alert('Xəta', 'Zəhmət olmasa 4 rəqəmli kodu tam daxil edin.');
      return;
    }
  }, [isSubmitDisabled]);

  const handleResendCode = useCallback(() => {
    if (!email) {
      Alert.alert('Xəta', 'Kodun göndərilməsi üçün etibarlı e-poçt tapılmadı.');
      return;
    }

    setOtpValues(Array.from({ length: OTP_INPUT_LENGTH }, () => ''));
    focusInput(0);
    Alert.alert(
      'Kod yenidən göndərildi',
      `${email} ünvanına yeni təsdiq kodu göndərildi.`,
    );
  }, [email, focusInput]);

  return (
    <AuthContainer title="Kodu Təsdiqləyin" description="" showHeader={true}>
      <View style={styles.formContainer}>
        <BaseText
          variant={BaseTextVariant.interMedium16}
          color={colors.black}
          isCenter
          style={styles.descriptionText}
        >
          {`${email} ünvanına göndərilən 4 rəqəmli kodu daxil edin.`}
        </BaseText>
        <View style={styles.codeHeader}>
          <BaseText
            variant={BaseTextVariant.interRegular14}
            color={colors.graniteGray}
          >
            Təsdiq Kodu
          </BaseText>
        </View>
        <View style={styles.codeInputsContainer}>
          {OTP_INPUT_KEYS.map((inputKey, index) => (
            <TextInput
              key={`${inputKey}`}
              ref={inputRefHandlers[index]}
              value={otpValues[index]}
              onChangeText={inputChangeHandlers[index]}
              onKeyPress={inputKeyPressHandlers[index]}
              keyboardType="number-pad"
              maxLength={OTP_INPUT_LENGTH}
              textAlign="center"
              style={styles.codeInput}
              cursorColor={colors.hunterGreen}
              selectionColor={colors.hunterGreen}
              autoCorrect={false}
              autoComplete="sms-otp"
              textContentType="oneTimeCode"
              selectTextOnFocus
            />
          ))}
        </View>
        <BaseButton
          title="Təsdiqlə"
          onPress={handleSubmit}
          type={BaseButtonTypeEnum.primary}
          rightIcon={SvgXmlIconNames.arrowRight}
          rightIconSize={IconSize.sm}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleResendCode}
          style={styles.resendButton}
        >
          <BaseText
            variant={BaseTextVariant.interMedium16}
            color={colors.hunterGreen}
            isCenter
          >
            Kodu yenidən göndər
          </BaseText>
        </TouchableOpacity>
      </View>
    </AuthContainer>
  );
};

const styles = StyleSheet.create({
  descriptionText: {},
  formContainer: {
    padding: 32,
    marginTop: 40,
    backgroundColor: colors.white,
    borderRadius: 32,
    gap: 24,
  },
  codeHeader: {
    gap: 8,
  },
  codeInputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  codeInput: {
    flex: 1,
    height: 56,
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: colors.gray,
    backgroundColor: colors.white,
    color: colors.gunmetal,
  },
  resendButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const OtpVerifyScreen = withAuthContainer(OtpVerifyScreenContent, {
//   title: 'Kodu Təsdiqləyin',
//   description: '',
//   showHeader: true,
// });

export default OtpVerifyScreen;
