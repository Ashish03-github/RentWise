import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomTabs';
import { DrawerRoutes } from './routes';

const Drawer = createDrawerNavigator();
export default function AppDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name={DrawerRoutes.mainTabs} component={BottomTabs} />
    </Drawer.Navigator>
  );
}
