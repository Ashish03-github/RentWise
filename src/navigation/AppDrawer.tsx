import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomTabs';
import { DrawerRoutes } from './routes';
import ChatsStack from './stacks/ChatStack';

const Drawer = createDrawerNavigator();
export default function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStatusBarAnimation: 'slide',
      }}
    >
      <Drawer.Screen
        options={{ title: 'Dashboard' }}
        name={DrawerRoutes.mainTabs}
        component={BottomTabs}
      />
      <Drawer.Screen
        options={{ title: 'Chats' }}
        name={DrawerRoutes.chatsStack}
        component={ChatsStack}
      />
    </Drawer.Navigator>
  );
}
