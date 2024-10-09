import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationProp, RouteProp, useRoute } from '@react-navigation/native';
import { PlantDetail } from '@/interfaces/Plants';
import { getPlant } from '@/services/WikiService';

type PlantDetailRouteProp = RouteProp<{ PlantDetail: { id: number } }, 'PlantDetail'>;

const PlantDetailScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const route = useRoute<PlantDetailRouteProp>();
  const { id } = route.params;
  const [plant, setPlant] = useState<PlantDetail>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlantDetail = async () => {
      try {
        const data = await getPlant(id);
        if ('error' in data) {
          console.error(data.error);
          alert(data.error);
          return;
        }

        setPlant(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchPlantDetail();
  }, [id]);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>AgroSearch</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.detailContainer}>
          {plant?.imageURL && (
            <Image
              source={{ uri: plant.imageURL }}
              style={styles.image}
              resizeMode="cover"
            />
          )}
          <Text style={styles.plantName}>{plant?.commonName}</Text>
          <Text style={styles.scientificName}>({plant?.scientificName})</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Familia:</Text>
            <Text style={styles.info}>{plant?.family}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Temporada de cosecha:</Text>
            <Text style={styles.info}>{plant?.harvestSeason}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Época de siembra:</Text>
            <Text style={styles.info}>{plant?.sowingSeason}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.label}>Descripcion:</Text>
            <Text style={styles.description}>{plant?.description}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8E7',
    paddingHorizontal: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4FAD22',
    textAlign: 'center',
    marginBottom: '10%',
    marginTop: '10%',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  detailContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginLeft: '5%',
    marginRight: '5%',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  plantName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#228B22',
    textAlign: 'center',
  },
  scientificName: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#6b6b6b',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
    marginRight: 5,
  },
  info: {
    color: '#555',
  },
  descriptionContainer: {
    marginTop: 20,
  },
  description: {
    color: '#555',
    textAlign: 'justify',
  },
});

export default PlantDetailScreen;
