import DashboardScreen from '@/features/dashboard/screens/DashboardScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DashboardRoutes } from '../routes';

const Stack = createNativeStackNavigator();

export default function DashboardStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={DashboardRoutes.home} component={DashboardScreen} />
    </Stack.Navigator>
  );
}
