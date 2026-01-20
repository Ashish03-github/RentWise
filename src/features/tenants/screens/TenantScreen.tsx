import React from 'react';
import { CircularButton, Container } from '@/common/components';
import TenantsList from '../components/TenantsList';
import { StyleSheet, View } from 'react-native';
import { TenantRoutes } from '@/navigation/routes';

const TenantScreen = () => {
  const styles = React.useMemo(() => stylesFn(), []);

  return (
    <Container screenHeading={'Tenants'}>
      <View style={styles.container}>
        <TenantsList />
        <CircularButton nextToScreen={TenantRoutes.addTenant} />
      </View>
    </Container>
  );
};

const stylesFn = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });
export default TenantScreen;
