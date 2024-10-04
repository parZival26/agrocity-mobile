import React, { useEffect, useCallback } from 'react';
import { ActivityIndicator, SafeAreaView, Text, TextInput, Image, ScrollView, RefreshControl, TouchableOpacity, StyleSheet, View } from 'react-native';
import { PlantWiki } from '@/interfaces/Plants';
import { getPlants } from '@/services/WikiService';
import { ThemedView } from '@/components/ThemedView';
import { NavigationProp } from '@react-navigation/native';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Wiki = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [plants, setPlants] = React.useState<PlantWiki[]>([]);
  const [search, setSearch] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  const fetchPlants = async () => {
    try {
      const data = await getPlants();
      if ('error' in data) {
        console.error(data.error);
        alert(data.error);
        return;
      }
      setPlants(data);
      setLoading(false);
      setRefreshing(false);
    } catch (error) {
      console.error(error);
      setRefreshing(false);
    }
  };

  const redirect = (id: number) => {
    navigation.navigate('PlantDetail', { id });
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchPlants();
  }, []);

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
      <Text style={styles.title}>AgroSearch</Text>

      <View style={styles.buscador}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faMagnifyingGlass} size={18} color="#4FAD22" />
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
          placeholderTextColor={'grey'}
          style={styles.searchInput} 
        />
      </View>

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {plants.map(plant => (
          <TouchableOpacity key={plant.id} onPress={() => redirect(plant.id)}>
            <View style={styles.plantContainer}>
              <Image
                source={{ uri: plant.imageURL }}
                style={styles.plantImage}
              />
              <View style={styles.plantInfo}>
                <Text style={styles.plantName}>{plant.commonName}</Text>
                <Text>{plant.scientificName}</Text>
                <Text>{plant.family}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
    marginBottom: '10%',
    marginTop: '10%'
  },
  buscador: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    marginRight: '5%',
    marginLeft: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10, 
  },
  plantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 10
  },
  plantImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  plantInfo: {
    marginLeft: 15,
    flex: 1,
  },
  plantName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Wiki;
