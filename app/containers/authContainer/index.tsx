import { ComponentType, useCallback } from 'react';
import {
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { BaseText, BaseTextVariant, Card } from '@/components';
import { colors, config } from '@/constants';
import { useAppNavigation } from '@/hooks';
import { SvgIcon, SvgXmlIconNames } from '@/assets';

interface AuthContainerOptions {
  title: string;
  description: string;
  showHeader?: boolean;
}

const {
  button: { hitSlop },
} = config;

const withAuthContainer = <P extends object>(
  WrappedComponent: ComponentType<P>,
  { title, description, showHeader = false }: AuthContainerOptions,
) => {
  const AuthContainerComponent = (props: P) => {
    const navigation = useAppNavigation();

    const handleGoBack = useCallback(() => {
      if (!navigation.canGoBack()) {
        return;
      }

      navigation.goBack();
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
              {showHeader && (
                <View style={styles.headerContainer}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={handleGoBack}
                    style={styles.headerButton}
                    hitSlop={hitSlop}
                  >
                    <SvgIcon name={SvgXmlIconNames.goBack} />
                  </TouchableOpacity>
                </View>
              )}
              <BaseText
                variant={BaseTextVariant.manropeExtraBold36}
                color={colors.gunmetal}
                isCenter
              >
                {title}
              </BaseText>
              {!!description && (
                <BaseText
                  variant={BaseTextVariant.interMedium16}
                  color={colors.black}
                  isCenter
                  style={styles.descriptionText}
                >
                  {description}
                </BaseText>
              )}
              <WrappedComponent {...props} />
            </Card>
          </LinearGradient>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return AuthContainerComponent;
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
  headerContainer: {
    marginBottom: 40,
    paddingHorizontal: 16,
  },
  headerButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  descriptionText: {
    marginTop: 16,
  },
});

export default withAuthContainer;
