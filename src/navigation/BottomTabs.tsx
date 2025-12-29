import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardStack from './stacks/DashboardStack';
import PaymentStack from './stacks/PaymentStack';
import { BottomTabRoutes } from './routes';
import PropertyStack from './stacks/PropertyStack';
import TenantStack from './stacks/TenantStack';
import ProfileStack from './stacks/ProfileStack';
import useTheme from '@/common/hooks/useTheme';
import { StyleSheet } from 'react-native';
import React from 'react';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeColors } from '@/theme/colors';
import { ThemeSpacing } from '@/theme/spacing';
import { AppIcon } from '@/common/components';
const Tab = createBottomTabNavigator();

const getTabIcon = (routeName: string, color: string, size: number) => {
  switch (routeName) {
    case BottomTabRoutes.property:
      return <AppIcon name="maps-home-work" size={size} color={color} />;

    case BottomTabRoutes.tenant:
      return <AppIcon type="feather" name="users" size={size} color={color} />;

    case BottomTabRoutes.dashboard:
      return <AppIcon type="ionicons" name="grid" size={size} color={color} />;

    case BottomTabRoutes.payments:
      return <AppIcon name="credit-card" size={size} color={color} />;

    case BottomTabRoutes.profile:
      return <AppIcon name="account-circle" size={size} color={color} />;

    default:
      return null;
  }
};

export default function BottomTabs() {
  const { Fonts, Colors, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Fonts, Colors, Spacing),
    [Fonts, Colors, Spacing],
  );

  return (
    <Tab.Navigator
      initialRouteName={BottomTabRoutes.dashboard}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: styles.tabLabel,
        tabBarActiveTintColor: Colors.primaryPure,
        tabBarInactiveTintColor: Colors.lightGrayPure,
        tabBarIcon: ({ color, size }) => getTabIcon(route.name, color, size),
      })}
    >
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
        name={BottomTabRoutes.dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarLabelStyle: styles.tabLabel,
        }}
        component={DashboardStack}
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
