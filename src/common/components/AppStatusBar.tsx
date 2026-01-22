import React from 'react';
import { View, StatusBar, Platform } from 'react-native';

const AppStatusBar = ({
  backgroundColor = '#F7F7F7',
}: {
  backgroundColor?: string;
}) => {
  return (
    <View
      style={{
        height: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor,
      }}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
    </View>
  );
};

export default AppStatusBar;
