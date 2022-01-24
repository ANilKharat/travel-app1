import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '../@components';
import { ProfileScreen, HomeScreen } from '../screens';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import { TabNavigation } from '.';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerLabelStyle: { marginLeft: -10, fontSize: 18 },
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigation}
        options={{
          drawerIcon: ({ color }) => (
            <IonicIcons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (
            <IonicIcons name="person-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
