import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
const Tab = createBottomTabNavigator();


  export function TabRoutes(){
    return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      
    </Tab.Navigator>
  );
}