import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileRoutes } from '../routes';
import { ProfileScreen } from '@/features/profile/screens';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ProfileRoutes.profile} component={ProfileScreen} />
    </Stack.Navigator>
  );
}
