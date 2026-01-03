import { FlatList } from 'react-native';
import React, { useCallback } from 'react';
import { propertiesData } from '../constants/properties.dummy.data';
import PropertyItem from './PropertyItem';

const PropertyList = () => {
  const renderItem = useCallback(
    ({ item, index }: { item: PropertyItem; index: number }) => {
      return <PropertyItem item={item} key={index} />;
    },
    [],
  );

  return (
    <FlatList
      data={propertiesData}
      renderItem={renderItem}
      keyExtractor={(_, i) => i.toString()}
    />
  );
};

export default PropertyList;
