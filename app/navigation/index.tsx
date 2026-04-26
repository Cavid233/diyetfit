import {
  createNavigationContainerRef,
  NavigationContainer,
  ParamListBase,
} from '@react-navigation/native';
import AppNavigation from './app';
import { StatusBar } from 'react-native';
// import {
//  MAIN_ROUTE_NAMES,
// ROOT_ROUTE_NAMES,
// } from './app';

const navigationRef = createNavigationContainerRef<ParamListBase>();

const Router = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <AppNavigation />
    </NavigationContainer>
  );
};

// export { MAIN_ROUTE_NAMES, ROOT_ROUTE_NAMES };
export default Router;
