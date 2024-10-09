import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const missions = [
  { id: 1, title: 'Misión #1', imageUrl: 'https://static.vecteezy.com/ti/vetor-gratis/p1/2392532-cartoon-vector-illustration-of-a-shovel-gratis-vetor.jpg/50', description: 'Descripción de la Misión 1' },
  { id: 2, title: 'Misión #2', imageUrl: 'https://img.freepik.com/vector-gratis/mano-dando-planta-crecimiento_78370-855.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728345600&semt=ais_hybrid/50', description: 'Descripción de la Misión 2' },
  { id: 3, title: 'Misión #3', imageUrl: 'https://us.123rf.com/450wm/yupiramos/yupiramos1808/yupiramos180800600/112380652-planta-con-maceta-de-rociadores-dise%C3%B1o-de-ilustraciones-vectoriales.jpg?ver=6/50', description: 'Descripción de la Misión 3' },
];

const Task = ({ navigation }: { navigation: any }) => {
  const handlePressMission = (mission: any) => {
    navigation.navigate('TaskDescription', { mission }); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>AgroCity</Text>
      <Text style={styles.subtitle}>Misiones</Text>
      <View style={styles.divider} />
      <View style={styles.missionsContainer}>
        {missions.map((mission) => (
          <TouchableOpacity key={mission.id} style={styles.mission} onPress={() => handlePressMission(mission)}>
            <Image source={{ uri: mission.imageUrl }} style={styles.missionImage} />
            <Text style={styles.missionText}>{mission.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
