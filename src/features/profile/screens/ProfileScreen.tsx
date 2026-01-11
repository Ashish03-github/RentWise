import React from 'react';
import { Container } from '@/common/components';
import UserDetailsCard from '../components/UserDetailsCard';
import SettingServices from '../components/SettingServices';
import { View, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <Container screenHeading={'Profile'}>
      <View style={styles.container}>
        <View style={styles.userDetailsContainer}>
          <UserDetailsCard />
        </View>
        <View style={styles.servicesContainer}>
          <SettingServices />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  userDetailsContainer: {
    height: '40%',
  },
  servicesContainer: {
    height: '60%',
  },
});

export default ProfileScreen;
