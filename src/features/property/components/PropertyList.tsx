import { FlatList } from 'react-native';
import React, { useCallback } from 'react';
import { propertiesData } from '../constants/properties.dummy.data';
import { Property } from '../types/proprty.type';
import PropertyItem from './PropertyItem';
import { EmptyState } from '@/common/components';
import { useAppSelector } from '@/store/hooks';
import { selectProperties } from '../store/properties.selectors';

const PropertyList = () => {
  const properties = useAppSelector(selectProperties);

  const renderItem = useCallback(
    ({ item, index }: { item: Property; index: number }) => {
      return <PropertyItem item={item} key={index} />;
    },
    [],
  );

  // const getItemLayout = useCallback(
  //   (item: any, index: number) => ({
  //     length: 100,
  //     offset: 100 * index,
  //     index,
  //   }),
  //   [],
  // );

  return (
    <FlatList
      data={properties}
      renderItem={renderItem}
      initialNumToRender={10}
      removeClippedSubviews={true}
      contentContainerStyle={{ flex: 1 }}
      keyExtractor={item => item.id}
      // getItemLayout={getItemLayout}
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
