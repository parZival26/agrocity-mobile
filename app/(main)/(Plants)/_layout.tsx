import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useColorScheme } from '@/hooks/useColorScheme';
import Garden from './Garden';
import AddPlant from './AddPlant';
import PlantCareTabLayout from './(PlantCare)/_layout';
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
      <PlantsStack.Screen
        name="AddPlant"
        component={AddPlant}
        options={{
          title: 'Add Plant',
          headerShown: false,
        }}
      />
      <PlantsStack.Screen
        name="PlantCare"
        component={PlantCareTabLayout}
        options={{
          title: 'Plant Care',
          headerShown: false,
        }}
      />
      
    </PlantsStack.Navigator>
  );
}