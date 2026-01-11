import { View, FlatList } from 'react-native';
import React from 'react';
import Service from './Service';
import { services } from '../constants/profile.constants';

const SettingServices = () => {
  return (
    <View>
      <FlatList
        data={services}
        renderItem={({ item }) => <Service item={item} />}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={false}
      />
    </View>
  );
};

export default SettingServices;
