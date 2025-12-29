import { View } from 'react-native';
import React from 'react';
import SummaryCard from './SummaryCard';
import { CardItem } from '../types/components.type';

const SummaryGrid = () => {
  const data: Array<CardItem> = [
    {
      cardIcon: 'indian-rupee-sign',
      cardHeading: 'Collected',
      cardText: '85000 INR',
      cardSubText: 'This Month',
    },
    {
      cardIcon: 'exclamation',
      cardHeading: 'Pending',
      cardText: '25000 INR',
      cardSubText: ' ',
    },
    {
      cardIcon: 'house-chimney',
      cardHeading: 'Properties',
      cardText: '6 Property',
      cardSubText: '4 occupied',
    },
    {
      cardIcon: 'users',
      cardHeading: 'Teanants',
      cardText: '4 Active',
      cardSubText: '',
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {data.map((item, index) => (
        <SummaryCard cardItem={item} key={index} cardType={`${index}`} />
      ))}
    </View>
  );
};

export default SummaryGrid;
