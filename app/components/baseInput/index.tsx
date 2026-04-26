import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import BaseText, { BaseTextVariant } from '../baseText';
import { colors, config } from '@/constants';

interface IBaseInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  label: string;
  rightLabel?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
}

const {
  button: { hitSlop },
} = config;

const BaseInput: React.FC<IBaseInputProps> = ({
  placeholder,
  value,
  onChangeText,
  label,
  rightLabel,
  leftIcon,
  rightIcon,
  onRightIconPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        {label && (
          <BaseText
            variant={BaseTextVariant.interRegular14}
            color={colors.graniteGray}
          >
            {label}
          </BaseText>
        )}
        {rightLabel && (
          <TouchableOpacity onPress={() => {}} hitSlop={hitSlop}>
            <BaseText
              variant={BaseTextVariant.interRegular14}
              color={colors.graniteGray}
            >
              {rightLabel}
            </BaseText>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.inputContainer}>
        {leftIcon && leftIcon}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.gray}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
        />
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress} hitSlop={hitSlop}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: colors.white,
    borderWidth: 0.5,
    borderRadius: 32,
    borderColor: colors.gray,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
  },
  input: {
    flex: 1,
  },
});

export default BaseInput;
