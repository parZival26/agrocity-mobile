import React from 'react'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faListCheck, faBookOpen, faLeaf } from '@fortawesome/free-solid-svg-icons';
import Misiones from './Misiones';
import Prueba from './Prueba';
import WikiTabLayout from './(AgroSearch)/_layout'; 
import { StyleSheet } from 'react-native';
import PlantsTabLayout from './(Plants)/_layout';

const MainStack = createBottomTabNavigator();

export default function MainTabLayout() {
  return (
    <MainStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconColor = focused ? '#4FAD22' : '#808080';

          if (route.name === 'AgroSearch') {
            return <FontAwesomeIcon icon={faBookOpen} color={iconColor} size={24} />;
          } else if (route.name === 'Misiones') {
            return <FontAwesomeIcon icon={faListCheck} color={iconColor} size={24} />;
          } else if (route.name === 'Plants') {
            return <FontAwesomeIcon icon={faLeaf} color={iconColor} size={24} />;
          }
        },
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#4FAD22',
        tabBarInactiveTintColor: '#808080',
      })}
    >
      <MainStack.Screen
        name="AgroSearch"
        component={WikiTabLayout}
        options={{
          title: 'Wiki',
          headerShown: false,
        }} />

      <MainStack.Screen
        name="Plants"
        component={PlantsTabLayout}
        options={{
          title: 'Plants',
          headerShown: false,
        }} />

    </MainStack.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    height: 100
  },
});
