// import React, { FC } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigatorScreenParams } from '@react-navigation/native';
// import { screenOptions } from '@/constants';

// import ObjectMainStackNavigator, {
//   ObjectMainRootParamsList,
//   OBJECT_MAIN_ROUTE_NAMES,
// } from './objectMain';
// import { PROFILE_MAIN_ROUTE_NAMES, ProfileRootParamsList } from './profile';
// import WaterMainStackNavigator, {
//   WATER_MAIN_ROUTE_NAMES,
//   WaterMainRootParamsList,
// } from './waterMain';

// export enum MAIN_ROUTE_NAMES {
//   ObjectMain = 'ObjectMain',
//   WaterMain = 'WaterMain',
// }

// export type MainRootParamsList = {
//   ObjectMain: NavigatorScreenParams<ObjectMainRootParamsList>;
//   WaterMain: NavigatorScreenParams<WaterMainRootParamsList>;
// };

// const Stack = createStackNavigator<MainRootParamsList>();

// const MainStackNavigator: FC = () => {
//   return (
//     <Stack.Navigator screenOptions={screenOptions}>
//       <Stack.Screen
//         name={MAIN_ROUTE_NAMES.ObjectMain}
//         component={ObjectMainStackNavigator}
//       />
//       <Stack.Screen
//         name={MAIN_ROUTE_NAMES.WaterMain}
//         component={WaterMainStackNavigator}
//       />
//     </Stack.Navigator>
//   );
// };

// export default MainStackNavigator;
// // export {
// //   PROFILE_MAIN_ROUTE_NAMES,
// //   OBJECT_MAIN_ROUTE_NAMES,
// //   WATER_MAIN_ROUTE_NAMES,
// // };
// // export type {
// //   ProfileRootParamsList,
// //   ObjectMainRootParamsList,
// //   WaterMainRootParamsList,
// // };
