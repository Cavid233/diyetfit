import { SvgIcon, SvgXmlIconNames } from '@/assets';
import { BaseText, BaseTextVariant, Card } from '@/components';
import { colors, config } from '@/constants';
import { MainContainer } from '@/containers';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import DoctorHomeCard, { DoctorHomeCardItem } from './doctorHomeCard';
import { useCallback } from 'react';

const {
  button: { activeOpacity },
} = config;

const listOfCards: DoctorHomeCardItem[] = [
  {
    id: 1,
    title: 'Müştəri sayı',
    value: 124,
    icon: <SvgIcon name={SvgXmlIconNames.clients} />,
    color: 'rgba(194, 238, 192, 0.4)',
  },
  {
    id: 2,
    title: 'Aktiv qruplar',
    value: 5,
    color: 'rgba(212, 232, 208, 0.4)',
    icon: <SvgIcon name={SvgXmlIconNames.groups} />,
  },
  {
    id: 3,
    title: 'Gözləyən müraciətlər',
    value: 18,
    color: 'rgba(248, 255, 188, 0.5)',
    icon: <SvgIcon name={SvgXmlIconNames.reviews} />,
  },
  {
    id: 4,
    title: 'Bugün aktiv olmayanlar',
    value: 4,
    color: 'rgba(194, 238, 192, 0.4)',
  },
];

const listOfQuickActions = [
  {
    id: 1,
    title: 'Yeni müştəri əlavə et',
    icon: <SvgIcon name={SvgXmlIconNames.newClient} />,
  },
  {
    id: 2,
    title: 'Yeni qrup əlavə et',
    icon: <SvgIcon name={SvgXmlIconNames.newGroup} />,
  },
  {
    id: 3,
    title: 'Hamiya bildiriş göndər',
    icon: <SvgIcon name={SvgXmlIconNames.broadcast} />,
  },
];

const DoctorHomeScreen = () => {
  const renderItem = useCallback(({ item }: { item: DoctorHomeCardItem }) => {
    return <DoctorHomeCard item={item} />;
  }, []);
  return (
    <MainContainer>
      <View style={styles.container}>
        <Card>
          <View style={styles.textContainer}>
            <BaseText
              variant={BaseTextVariant.manropeBold30}
              color={colors.gunmetal}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              👋 Salamlar, Dr.Günel
            </BaseText>
            <BaseText
              variant={BaseTextVariant.interRegular16}
              color={colors.graniteGray}
            >
              DiyetFit-ə xoş gəlmisiniz!
            </BaseText>
          </View>
          <FlatList
            data={listOfCards}
            numColumns={2}
            contentContainerStyle={styles.cardsContentContainer}
            columnWrapperStyle={styles.columnWrapper}
            renderItem={renderItem}
            scrollEnabled={false}
          />
          <View style={styles.quickActionsContainer}>
            <BaseText
              variant={BaseTextVariant.manropeBold18}
              color={colors.gunmetal}
            >
              Quick Actions
            </BaseText>
            <View style={styles.quickActionsList}>
              {listOfQuickActions.map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.quickActionItem}
                  onPress={() => {}}
                  activeOpacity={activeOpacity}
                >
                  <View style={styles.quickActionItemIcon}>{item.icon}</View>
                  <BaseText
                    variant={BaseTextVariant.interMedium14}
                    color={colors.gunmetal}
                  >
                    {item.title}
                  </BaseText>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.bottomContainer} />
        </Card>
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    gap: 8,
    marginBottom: 40,
    marginTop: 24,
  },
  cardsContentContainer: {
    gap: 16,
  },
  columnWrapper: {
    gap: 16,
  },
  quickActionsList: {
    backgroundColor: colors.white,
    borderRadius: 16,
  },
  quickActionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
  },
  quickActionItemIcon: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.porcelainMist,
  },
  quickActionsContainer: {
    gap: 16,
    marginTop: 32,
  },
  bottomContainer: {
    height: 100,
  },
});

export default DoctorHomeScreen;
