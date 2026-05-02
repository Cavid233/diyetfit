import { BaseText } from '@/components';
import { MainContainer } from '@/containers';
import { StyleSheet, View } from 'react-native';

const DoctorGroupsScreen = () => {
  return (
    <MainContainer>
      <View style={styles.container}>
        <BaseText>Doctor Groups</BaseText>
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DoctorGroupsScreen;
