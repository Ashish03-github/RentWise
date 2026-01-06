import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TenantRoutes } from '../routes';
import { AddTenantFormScreen, TenantScreen } from '@/features/tenants/screens';

const Stack = createNativeStackNavigator();

export default function TenantStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={TenantRoutes.tenant} component={TenantScreen} />
      <Stack.Screen
        name={TenantRoutes.addTenant}
        component={AddTenantFormScreen}
      />
    </Stack.Navigator>
  );
}
