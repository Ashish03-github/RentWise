import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppDrawer from './AppDrawer';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/type';
import AuthNavigator from './AuthNavigator';

export default function RootNavigator() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppDrawer /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
