import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TenantRoutes } from '../routes';
import { AddTenantFormScreen, TenantScreen } from '@/features/tenants/screens';
import TenantDetailsScreen from '@/features/tenants/screens/TenantDetailsScreen';

const Stack = createNativeStackNavigator();

export default function TenantStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={TenantRoutes.tenant} component={TenantScreen} />
      <Stack.Screen
        name={TenantRoutes.tenantDetails}
        component={TenantDetailsScreen}
      />
      <Stack.Screen
        name={TenantRoutes.addTenant}
        component={AddTenantFormScreen}
      />
    </Stack.Navigator>
  );
}
