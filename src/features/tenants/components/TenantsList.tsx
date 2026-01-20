import { FlatList } from 'react-native';
import React from 'react';
import { tenantsData } from '../constants/tenants.dummy.data';
import { TenantItem as TenantItemProps } from '../types/tenant.components.type';
import TenantItem from './TenantItem';
import { EmptyState } from '@/common/components';

const TenantsList = () => {
  const renderItem = React.useMemo(
    () =>
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
      keyExtractor={(_, i) => i.toString()}
      ListEmptyComponent={
        <EmptyState icon="user-xmark" message="No tenant added yet." />
      }
    />
  );
};

export default TenantsList;
