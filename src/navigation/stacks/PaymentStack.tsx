import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaymentScreen } from '@/features/payments/screens';
import { PaymentRoutes } from '../routes';

const Stack = createNativeStackNavigator();

export default function PaymentStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={PaymentRoutes.paymentHome}
        component={PaymentScreen}
      />
    </Stack.Navigator>
  );
}
