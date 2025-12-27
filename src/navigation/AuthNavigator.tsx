import LoginScreen from '@/features/auth/screens/LoginScreen';
import RegisterScreen from '@/features/auth/screens/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthRoutes } from './routes';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AuthRoutes.login} component={LoginScreen} />
      <Stack.Screen name={AuthRoutes.register} component={RegisterScreen} />
    </Stack.Navigator>
  );
}
