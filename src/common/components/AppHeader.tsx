import { View, Text } from 'react-native';
import React from 'react';

type AppHeaderProps = {
  heading?: string;
};
const AppHeader: React.FC<AppHeaderProps> = ({ heading }) => {
  return (
    <View>
      <Text>{heading}</Text>
    </View>
  );
};

export default AppHeader;
