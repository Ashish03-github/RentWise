import { StyleSheet, View } from 'react-native';
import React, { useEffect, useCallback } from 'react';
import { Container } from '@/common/components';
import TenantCard from '../components/TenantCard';
import TenantDetailsCard from '../components/TenantDetailsCard';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectActiveTenant } from '../store/tenants.selectors';
import { removeTenant, clearActiveTenantId } from '../store/tenants.slice';
import { useNavigation } from '@react-navigation/native';

const TenantDetailsScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const tenant = useAppSelector(selectActiveTenant);
  const isRemoved = (tenant as any)?._isRemoved;

  useEffect(() => {
    return () => {
      dispatch(clearActiveTenantId());
    };
  }, [dispatch]);

  const endLease = useCallback(() => {
    dispatch(removeTenant({ id: tenant?.id || '' }));
    navigation.goBack();
  }, [dispatch, navigation, tenant?.id]);

  return (
    <Container
      screenHeading="Tenant Details"
      buttonLabel={isRemoved ? undefined : 'End Lease'}
      onButtonPress={isRemoved ? undefined : endLease}
    >
      <View style={styles.container}>
        <TenantCard />

        <View style={styles.detailsContainer}>
          <TenantDetailsCard />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    height: '50%',
  },
});

export default TenantDetailsScreen;
