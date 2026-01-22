import { FlatList } from 'react-native';
import React from 'react';
import { TenantHistoryItem } from '../store/tenants.slice';
import RemovedTenantItem from './RemovedTenantItem';
import { EmptyState } from '@/common/components';
import { useAppSelector } from '@/store/hooks';
import { selectRemovedTenants } from '../store/tenants.selectors';

const RemovedTenantList = () => {
  const removedTenants = useAppSelector(selectRemovedTenants);

  const renderItem = React.useCallback(
    ({ item, index }: { item: TenantHistoryItem; index: number }) => (
      <RemovedTenantItem item={item} key={index} />
    ),
    [],
  );

  return (
    <FlatList
      data={removedTenants}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id || index.toString()}
      initialNumToRender={10}
      removeClippedSubviews
      showsVerticalScrollIndicator
      contentContainerStyle={{ paddingBottom: 16 }}
      style={{ flex: 1 }}
      ListEmptyComponent={
        <EmptyState
          icon="user-xmark"
          message="No removed tenants yet."
        />
      }
    />
  );
};

export default RemovedTenantList;

