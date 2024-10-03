import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useColorScheme } from '@/hooks/useColorScheme';
import Wiki from './Wiki';
import PlantDetailScreen from './PlantDetail';

const WikiStack = createNativeStackNavigator();

export default function WikiTabLayout() {
  const colorScheme = useColorScheme();

  return (
    <WikiStack.Navigator>
      <WikiStack.Screen
        name="Wiki"
        component={Wiki}
        options={{
          title: 'Wiki',
          headerShown: false,
        }}
      />

      <WikiStack.Screen
        name="PlantDetail"
        component={PlantDetailScreen}
        options={{
          title: 'Plant Detail',
          headerShown: false,
        }}
      />
    
    </WikiStack.Navigator>
  );
}