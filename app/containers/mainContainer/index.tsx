import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IMainContainerProps {
  children: React.ReactNode;
  isScrollable?: boolean;
}

const MainContainer = ({
  children,
  isScrollable = true,
}: IMainContainerProps) => {
  const insets = useSafeAreaInsets();
  const ContainerComponent = useMemo(() => {
    return isScrollable ? KeyboardAwareScrollView : View;
  }, [isScrollable]);

  return (
    <View style={[styles.container]}>
      <ContainerComponent
        style={[styles.container, { paddingTop: insets.top }]}
        contentContainerStyle={isScrollable ? styles.scrollContent : undefined}
        showsVerticalScrollIndicator={isScrollable ? false : undefined}
        keyboardShouldPersistTaps={isScrollable ? 'handled' : undefined}
        enableOnAndroid={isScrollable ? true : undefined}
      >
        {children}
      </ContainerComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});

export default MainContainer;
