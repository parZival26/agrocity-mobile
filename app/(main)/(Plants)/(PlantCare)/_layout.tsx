import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from '@/hooks/useColorScheme';
import Index from './Index';
import Task from './Task'; 
import TaskDescription from './TaskDescription';

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
      <PlantCare.Screen
        name="Task"
        component={Task}
        options={{
          title: 'Tareas',
          headerShown: false,
        }}
      />
      <PlantCare.Screen
        name="TaskDescription"
        component={TaskDescription}
        options={{
          title: 'TaskDescription',
          headerShown: false,
        }}
      />
    </PlantCare.Navigator>
  );
}
