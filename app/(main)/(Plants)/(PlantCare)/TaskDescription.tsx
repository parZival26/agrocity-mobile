import { ThemedView } from '@/components/ThemedView';
import { completeMission, getMission } from '@/services/MissionService';
import { NavigationProp, RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, Alert, View, ActivityIndicator } from 'react-native';
import { Mission } from '@/interfaces/Mission';

type TaskDescriptionRouteProp = RouteProp<{ TaskDescriptionDetail: { id: number } }, 'TaskDescriptionDetail'>;

const TaskDescription = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [mission, setMission] = React.useState<Mission>({} as Mission);
  const route = useRoute<TaskDescriptionRouteProp>();
  const { id } = route.params ?? {};
  const [loading, setLoading] = useState(true);

  const handleCompleteMission = async () => {
    const response = await completeMission(id);
    if (typeof response === 'object' && 'error' in response) {
      Alert.alert("Error", response.error);
    } else {
      Alert.alert("Success", "Mission completed!");
      navigation.goBack();
    }
  };

  useEffect(() => {
    if (!id) {
      console.log('No ID provided');
      return;
    }

    const fetchUserPlantMissions = async () => {
      try {
        const response = await getMission(id);

        if ('error' in response) {
          Alert.alert("Error", response.error);
          navigation.goBack();
        } else {
          setMission(response);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching mission:', error);
        Alert.alert("Error", "Failed to fetch mission");
        navigation.goBack();
      }
    };

    fetchUserPlantMissions();
  }, [id, navigation]);

  if (loading) {
    return (
      <ThemedView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </ThemedView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{mission.name}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{mission.description}</Text>
      </View>
      <View style={styles.spacer} />
      <TouchableOpacity 
        style={styles.completeButton}
        onPress={handleCompleteMission}
      >
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