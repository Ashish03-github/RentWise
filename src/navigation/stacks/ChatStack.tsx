import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatsRoutes } from '../routes';
import {
  ChatsListingScreen,
  MessagesListingScreen,
} from '@/features/chats/screens';

const Stack = createNativeStackNavigator();

export default function ChatsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ChatsRoutes.chats} component={ChatsListingScreen} />
      <Stack.Screen
        name={ChatsRoutes.messages}
        component={MessagesListingScreen}
      />
    </Stack.Navigator>
  );
}
