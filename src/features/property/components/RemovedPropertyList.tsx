import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { EmptyState } from '@/common/components';
import { useAppSelector } from '@/store/hooks';
import { selectRemovedProperties } from '../store/properties.selectors';
import { PropertyHistoryItem } from '../store/properties.slice';
import RemovedPropertyItem from './RemovedPropertyItem';

const RemovedPropertyList = () => {
  const removed = useAppSelector(selectRemovedProperties);

  const renderItem = useCallback(({ item }: { item: PropertyHistoryItem }) => {
    return <RemovedPropertyItem item={item} />;
  }, []);

  return (
    <FlatList
      data={removed}
      renderItem={renderItem}
      initialNumToRender={10}
      removeClippedSubviews
      contentContainerStyle={{ flex: 1 }}
      keyExtractor={item => item.id}
      ListEmptyComponent={
        <EmptyState icon="clock-rotate-left" message="No removed properties." />
      }
    />
  );
};

export default RemovedPropertyList;


