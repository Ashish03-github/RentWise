import { FlatList } from 'react-native';
import React from 'react';
import { TenantItem as TenantItemProps } from '@/features/tenants/types/tenant.components.type';
import { tenantsData } from '@/features/tenants/constants/tenants.dummy.data';
import HistoryItem from './HistoryItem';

const HistoryList = () => {
  const renderItem = React.useCallback(
    ({ item, i }: { item: TenantItemProps; i: number }) => (
      <HistoryItem item={item} key={i} />
    ),
    [],
  );

  return (
    <FlatList
      data={tenantsData}
      renderItem={renderItem}
      keyExtractor={(_, i) => i.toString()}
      initialNumToRender={10}
      removeClippedSubviews
      showsVerticalScrollIndicator
      contentContainerStyle={{ paddingBottom: 16 }}
      style={{ flex: 1 }}
    />
  );
};
export default HistoryList;
