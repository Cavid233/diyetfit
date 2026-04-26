import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface ICardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Card = ({ children, style }: ICardProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});

export default Card;
