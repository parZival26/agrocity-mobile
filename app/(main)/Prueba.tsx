import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Prueba = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>AgroCity</Text>
      <Text style={styles.content}>Prueba</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4FAD22', 
    marginBottom: 20,
  },
  content: {
    fontSize: 18,
    color: '#333',
  },
});

export default Prueba;
