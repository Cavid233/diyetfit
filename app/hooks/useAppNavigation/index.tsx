import {
  AuthRootParamsList,
  //   MainRootParamsList,
  //   ObjectMainRootParamsList,
  //   ProfileRootParamsList,
  RootRootParamsList,
  //   TabRootParamsList,
  //   WaterMainRootParamsList,
} from '@/navigation';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Combine all param lists for a single, convenient navigation type.
// We omit the `Profile` key from `ProfileRootParamsList`, because it is
// already defined on `RootRootParamsList` (as a nested stack). Keeping
// only the root definition prevents the `Profile` route params from
// collapsing to `never` in the intersection type.
// ObjectMainRootParamsList is included so ObjectMain routes are also typed.
export type AppNavigationType = RootRootParamsList & AuthRootParamsList;
//   &
//   MainRootParamsList &
//   ObjectMainRootParamsList &
//   TabRootParamsList &
//   Omit<ProfileRootParamsList, 'Profile'> &
//   WaterMainRootParamsList;

const useAppNavigation = () => {
  // Typed navigation helper used across the app
  const navigation = useNavigation<StackNavigationProp<AppNavigationType>>();
  return navigation;
};

export default useAppNavigation;
