import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useColorScheme } from '@/hooks/useColorScheme';
import Index from './Index';

const PlantCare = createNativeStackNavigator();

export default function PlantCareTabLayout() {
  const colorScheme = useColorScheme();

  return (
    <PlantCare.Navigator>
      <PlantCare.Screen
        name="Index"
        component={Index}
        options={{
          title: 'Plant Care',
          headerShown: false,
        }}
      />
      
      
    </PlantCare.Navigator>
  );
}