import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppDrawer from './AppDrawer';
import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import { selectIsAuthenticated } from '@/features/auth/store/auth.selectors';

export default function RootNavigator() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppDrawer /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
