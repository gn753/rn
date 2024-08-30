import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
export type RootStackParamList = {
  Feeds: undefined;
  Calendar: undefined;
  Search: undefined;
  // 다른 스크린을 여기에 추가
};

type NavigationType = StackNavigationProp<RootStackParamList>;

export const useTypedNavigation = () => {
  return useNavigation<NavigationType>();
};
