import { FlatList } from 'react-native';
import React from 'react';
import { propertiesData } from '../constants/properties.dummy.data';
import { PropertyItem as PropertyItemProps } from '../types/proprty.type';
import PropertyItem from './PropertyItem';
import { EmptyState } from '@/common/components';

const PropertyList = () => {
  const renderItem = React.useMemo(
    () =>
      ({ item, index }: { item: PropertyItemProps; index: number }) => {
        return <PropertyItem item={item} key={index} />;
      },
    [],
  );
  return (
    <FlatList
      data={propertiesData}
      renderItem={renderItem}
      initialNumToRender={10}
      removeClippedSubviews={true}
      contentContainerStyle={{ flex: 1 }}
      keyExtractor={(_, i) => i.toString()}
      ListEmptyComponent={
        <EmptyState
          icon="building-circle-xmark"
          message="No property added yet."
        />
      }
    />
  );
};

export default PropertyList;
