import React, { useEffect, useCallback } from 'react';
import { ActivityIndicator, SafeAreaView, Text, TextInput, Image, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import { PlantWiki } from '@/interfaces/Plants';
import { getPlants } from '@/services/WikiService';
import { ThemedView } from '@/components/ThemedView';
import { NavigationProp } from '@react-navigation/native';

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
    }


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
        <SafeAreaView style={{ flex: 1 }}>
            <Text>AgroSearch</Text>
            <TextInput
                placeholder="Search"
                value={search}
                onChangeText={setSearch}
            />
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                {plants.map(plant => (
                    <TouchableOpacity key={plant.id}
                        onPress={() => redirect(plant.id)}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#ccc',
                        }}
                    >
                        <Image
                            source={{ uri: plant.imageURL }}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text>{plant.commonName}</Text>
                        <Text>{plant.scientificName}</Text>
                        <Text>{plant.family}</Text>
                    </TouchableOpacity>

                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Wiki;