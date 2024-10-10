import { ThemedView } from '@/components/ThemedView';
import { UserPlantMission } from '@/interfaces/Mission';
import { getUserPlantMissions } from '@/services/MissionService';
import { NavigationProp, RouteProp, useIsFocused, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';


type TaskRouteProp = RouteProp<{ TaskDetail: { id: number } }, 'TaskDetail'>;


const Task = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [userPlantMissions, setUserPlantMissions] = React.useState<UserPlantMission[]>([]);
  const route = useRoute<TaskRouteProp>();
  const { id } = route.params ?? {};
  const [loading, setLoading] = React.useState(true);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (!id) {
      return;
    }
  
    const fetchUserPlantMissions = async () => {
      const response = await getUserPlantMissions(id);
      if (response instanceof Array) {
        setUserPlantMissions(response);
        setLoading(false);
      } else {
        alert(response.error);
      }
    };

    if (isFocused) {
      fetchUserPlantMissions();
    }
  }, [isFocused]);

  const handlePressMission = (id:number) => {
    navigation.navigate('TaskDescription', { id }); 
  };

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
      <Text style={styles.title}>AgroCity</Text>
      <Text style={styles.subtitle}>Misiones</Text>
      <View style={styles.divider} />
      <ScrollView style={styles.missionsContainer}>
        {
        userPlantMissions.length === 0 ? (
          <Text>No hay misiones disponibles</Text>
        ) : (
          userPlantMissions.map((mission) => (
            <TouchableOpacity key={mission.id} style={styles.mission} onPress={() => handlePressMission(mission.Mission.id)}>
              <Text style={styles.missionText}>{mission.Mission.name}</Text>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8E7',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4FAD22',
    textAlign: 'center',
    marginBottom: '5%',
    marginTop: '5%',
  },
  subtitle: {
    fontSize: 20,
    color: '#4FAD22',
    fontWeight: 'bold',
    marginLeft: '5%',
  },
  divider: {
    height: 4,
    backgroundColor: '#4FAD22',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    marginBottom: 15,
  },
  missionsContainer: {
    flexDirection: 'column',
    marginLeft: '5%',
    marginRight: '5%',
  },
  mission: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  missionImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  missionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Task;
