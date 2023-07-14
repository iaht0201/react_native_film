import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Detail from '../screen/Detail';
import Icon from 'react-native-ionicons';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='home' screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let rn = route.name;
        if (rn == 'home') {
          iconName = focused ? 'home' : 'home-outline'
        }
        else if (rn == 'detail') {
          iconName = focused ? 'list' : 'list-outline'
        }
        return <Icon name={iconName} size={size} color={color} className={`${focused ? 'text-red-900' : 'text-black'}`} />
      }
    })}>
      <Tab.Screen name="home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="detail" component={Detail} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
