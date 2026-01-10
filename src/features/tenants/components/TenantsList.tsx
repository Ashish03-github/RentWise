import { FlatList } from 'react-native';
import React from 'react';
import { tenantsData } from '../constants/tenants.dummy.data';
import { TenantItem as TenantItemProps } from '../types/tenant.components.type';
import TenantItem from './TenantItem';

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
      keyExtractor={(_, i) => i.toString()}
      removeClippedSubviews={true}
    />
  );
};

export default TenantsList;
