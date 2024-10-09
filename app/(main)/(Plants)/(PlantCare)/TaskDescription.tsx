import React from 'react';
import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, Alert, View } from 'react-native';

const TaskDescription = ({ route, navigation }: { route: any, navigation: any }) => {
  const { mission } = route.params;  

  const handleCompleteTask = () => {
    Alert.alert("Tarea Completada", `Has completado: ${mission.title}`);
    navigation.goBack(); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: mission.imageUrl }} style={styles.missionImage} />
      </View>
      <Text style={styles.title}>{mission.title}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{mission.description}</Text>
      </View>
      <View style={styles.spacer} />
      <TouchableOpacity style={styles.completeButton} onPress={handleCompleteTask}>
        <Text style={styles.buttonText}>Completar Tarea</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8E7',
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4FAD22',
    textAlign: 'center',
    marginBottom: 20,
  },
  missionImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  descriptionContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginLeft: '5%',
    marginRight: '5%'
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  completeButton: {
    backgroundColor: '#4FAD22',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute', 
    bottom: '5%', 
    left: '25%',
    width: '80%',
    transform: [{ translateX: -50 }], 
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  spacer: {
    flex: 1, 
  },
});

export default TaskDescription;
