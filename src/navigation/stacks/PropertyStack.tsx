import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PropertyRoutes } from '../routes';
import {
  AddPropertyFormScreen,
  PropertyDetailsScreen,
  PropertyScreen,
} from '@/features/property/screens';
import PropertyHistory from '@/features/property/screens/PropertyHistory';

const Stack = createNativeStackNavigator();

export default function PropertyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={PropertyRoutes.property} component={PropertyScreen} />
      <Stack.Screen
        name={PropertyRoutes.addProperty}
        component={AddPropertyFormScreen}
      />
      <Stack.Screen
        name={PropertyRoutes.propertyDetails}
        component={PropertyDetailsScreen}
      />
      <Stack.Screen
        name={PropertyRoutes.propertyHistory}
        component={PropertyHistory}
      />
      <Stack.Screen
        name={PropertyRoutes.editProperty}
        component={AddPropertyFormScreen}
      />
    </Stack.Navigator>
  );
}
