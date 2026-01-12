import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaymentScreen } from '@/features/payments/screens';
import { PaymentRoutes } from '../routes';
import AddPaymentScreen from '@/features/payments/screens/AddPaymentScreen';

const Stack = createNativeStackNavigator();

export default function PaymentStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={PaymentRoutes.paymentHome}
        component={PaymentScreen}
      />
      <Stack.Screen
        name={PaymentRoutes.addPayment}
        component={AddPaymentScreen}
      />
    </Stack.Navigator>
  );
}
