import { BaseText, BaseTextVariant } from '@/components';
import { colors } from '@/constants';
import { ReactNode, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

export type DoctorHomeCardItem = {
  id: number;
  title: string;
  value: number;
  icon?: ReactNode;
  color: string;
};

type DoctorHomeCardProps = {
  item: DoctorHomeCardItem;
};

const DoctorHomeCard = ({ item }: DoctorHomeCardProps) => {
  const iconBoxStyle = useMemo(
    () => [styles.iconBoxContainer, { backgroundColor: item.color }],
    [item.color],
  );

  return (
    <View style={styles.cardContent}>
      <View style={iconBoxStyle}>{item.icon}</View>
      <BaseText variant={BaseTextVariant.manropeBold30} color={colors.gunmetal}>
        {item.value}
      </BaseText>
      <BaseText
        variant={BaseTextVariant.interMedium14}
        color={colors.graniteGray}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {item.title}
      </BaseText>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContent: {
    flex: 1,
    backgroundColor: colors.white,
    height: 156,
    borderRadius: 48,
    padding: 20,
  },
  iconBoxContainer: {
    width: 40,
    height: 40,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
});

export default DoctorHomeCard;
