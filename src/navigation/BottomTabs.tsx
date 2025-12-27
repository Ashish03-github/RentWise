import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardStack from './stacks/DashboardStack';
import PaymentStack from './stacks/PaymentStack';
import { BottomTabRoutes } from './routes';
import PropertyStack from './stacks/PropertyStack';
import TenantStack from './stacks/TenantStack';
import ProfileStack from './stacks/ProfileStack';
import useTheme from '@/common/hooks/useTheme';
import { StyleSheet } from 'react-native';
import React, { useMemo } from 'react';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeColors } from '@/theme/colors';
import { ThemeSpacing } from '@/theme/spacing';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const { Fonts, Colors, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Fonts, Colors, Spacing),
    [Fonts, Colors, Spacing],
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: styles.tabLabel,
        tabBarActiveTintColor: Colors.blackPure,
        tabBarInactiveTintColor: Colors.lightGrayPure,
      }}
    >
      <Tab.Screen
        name={BottomTabRoutes.dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarLabelStyle: styles.tabLabel,
        }}
        component={DashboardStack}
      />

      <Tab.Screen
        name={BottomTabRoutes.property}
        options={{
          tabBarLabel: 'Properties',
          tabBarLabelStyle: styles.tabLabel,
        }}
        component={PropertyStack}
      />

      <Tab.Screen
        name={BottomTabRoutes.tenant}
        options={{
          tabBarLabel: 'Tenants',
          tabBarLabelStyle: styles.tabLabel,
        }}
        component={TenantStack}
      />

      <Tab.Screen
        name={BottomTabRoutes.payments}
        options={{
          tabBarLabel: 'Payments',
          tabBarLabelStyle: styles.tabLabel,
        }}
        component={PaymentStack}
      />
      <Tab.Screen
        name={BottomTabRoutes.profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: styles.tabLabel,
        }}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
}

const stylesFn = (
  Fonts: ThemeFonts,
  Colors: ThemeColors,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    tabLabel: {
      ...Spacing.mt1,
      ...Fonts.font500,
      // ...Colors.textBlack,
    },
  });
