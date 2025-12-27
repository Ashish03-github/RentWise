import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardStack from './stacks/DashboardStack';
import PaymentStack from './stacks/PaymentStack';
import { BottomTabRoutes } from './routes';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={BottomTabRoutes.dashboard} component={DashboardStack} />
      <Tab.Screen name={BottomTabRoutes.payments} component={PaymentStack} />
    </Tab.Navigator>
  );
}
