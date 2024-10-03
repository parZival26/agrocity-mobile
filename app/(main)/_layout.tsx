import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useColorScheme } from '@/hooks/useColorScheme';
import Home from './Home';
import Prueba from './Prueba';
import WikiTabLayout from './(AgroSearch)/_layout';

const MainStack = createBottomTabNavigator();

export default function MainTabLayout() {
  const colorScheme = useColorScheme();

  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Prueba"
        component={Prueba}
        options={{
          title: 'Prueba',
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="AgroSearch"
        component={WikiTabLayout}
        options={{
          title: 'Wiki',
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
}