import { FlatList } from 'react-native';
import React from 'react';
import { propertiesData } from '../constants/properties.dummy.data';
import { PropertyItem as PropertyItemProps } from '../types/proprty.type';
import PropertyItem from './PropertyItem';

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
      keyExtractor={(_, i) => i.toString()}
    />
  );
};

export default PropertyList;
