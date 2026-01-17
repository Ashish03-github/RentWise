import React from 'react';
import { View, StatusBar, Platform } from 'react-native';

const AppStatusBar = ({ backgroundColor }: { backgroundColor: string }) => {
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
        barStyle="light-content"
      />
    </View>
  );
};

export default AppStatusBar;
