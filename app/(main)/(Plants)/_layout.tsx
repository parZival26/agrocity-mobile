import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useColorScheme } from '@/hooks/useColorScheme';
import Garden from './Garden';
const PlantsStack = createNativeStackNavigator();

export default function PlantsTabLayout() {
  const colorScheme = useColorScheme();

  return (
    <PlantsStack.Navigator>
      <PlantsStack.Screen
        name="Garden"
        component={Garden}
        options={{
          title: 'Garden',
          headerShown: false,
        }}
      />
      
    </PlantsStack.Navigator>
  );
}