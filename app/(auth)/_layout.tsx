import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useColorScheme } from '@/hooks/useColorScheme';
import LoginScreen from './Login'; // Asegúrate de importar el componente correcto

const AuthStack = createNativeStackNavigator();

export default function AuthTabLayout() {
  const colorScheme = useColorScheme();

  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
}