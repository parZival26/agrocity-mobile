import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useColorScheme } from '@/hooks/useColorScheme';
import Home from './Home';
import Prueba from './Prueba';

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
    </MainStack.Navigator>
  );
}