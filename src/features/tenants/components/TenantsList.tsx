import { FlatList } from 'react-native';
import React from 'react';
import { TenantItem as TenantItemProps } from '../types/tenant.components.type';
import TenantItem from './TenantItem';
import { EmptyState } from '@/common/components';
import { useAppSelector } from '@/store/hooks';
import { selectTenants } from '../store/tenants.selectors';
import { tenantsData } from '../constants/tenants.dummy.data';

const TenantsList = () => {
  const tenants = useAppSelector(selectTenants);

  const renderItem = React.useCallback(
    ({ item, index }: { item: TenantItemProps; index: number }) => {
      return <TenantItem item={item} key={index} />;
    },
    [],
  );

  return (
    <FlatList
      data={tenantsData}
      renderItem={renderItem}
      removeClippedSubviews={true}
      contentContainerStyle={{ flex: 1 }}
      keyExtractor={item => item.id || item.tenantName}
      ListEmptyComponent={
        <EmptyState icon="user-xmark" message="No tenant added yet." />
      }
    />
  );
};

export default TenantsList;
