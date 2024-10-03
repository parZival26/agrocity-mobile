import { PlantDetail } from '@/interfaces/Plants';
import { getPlant } from '@/services/WikiService';
import { NavigationProp, RouteProp, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, ScrollView, Text } from 'react-native'

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
          <SafeAreaView>
            <ActivityIndicator size="large" color="#0000ff" />
          </SafeAreaView>
        );
      }



    return (
        <SafeAreaView>
            <ScrollView>
                <Text>{plant?.commonName}</Text>
                <Text>{plant?.scientificName}</Text>
                <Text>{plant?.family}</Text>
                <Text>{plant?.harvestSeason}</Text>
                <Text>{plant?.sowingSeason}</Text>
                <Text>{plant?.description}</Text>
            </ScrollView>

        </SafeAreaView>
    )
}

export default PlantDetailScreen
