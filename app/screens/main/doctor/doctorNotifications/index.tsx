import { BaseText } from '@/components';
import { MainContainer } from '@/containers';
import { StyleSheet, View } from 'react-native';

const DoctorNotificationsScreen = () => {
  return (
    <MainContainer>
      <View style={styles.container}>
        <BaseText>Doctor Notifications</BaseText>
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DoctorNotificationsScreen;
