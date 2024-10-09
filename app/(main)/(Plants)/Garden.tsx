import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, Text, TouchableOpacity, StyleSheet, View, FlatList } from 'react-native'
import { UserPlant } from '@/interfaces/Plants'
import { getUserPlants } from '@/services/PlantsService'
import { NavigationProp, useIsFocused } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Garden = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [userPlants, setUserPlants] = useState<UserPlant[]>([])
  const [loading, setLoading] = useState(true)
  const isFocused = useIsFocused();

  const handleAddPlant = () => {
    navigation.navigate('AddPlant')
  }

  const handlePlantCare = (id: number) => {
    navigation.navigate('PlantCare', { screen: 'Index', params: { id } })
  }

  useEffect(() => {
    const getPlants = async () => {
      const response = await getUserPlants()
      if (response instanceof Array) {
        setUserPlants(response)
        setLoading(false)
      } else {
        alert(response.error)
      }
    }

    if (isFocused) {
      getPlants()
    }
  }, [isFocused])

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>AgroCity</Text>

      <View style={styles.header}>
        <Text style={styles.headerText}>Tus plantas</Text>
        <TouchableOpacity onPress={handleAddPlant}>
          <FontAwesomeIcon icon={faPlus} size={24} color="#4FAD22" />
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <FlatList
        data={userPlants}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePlantCare(item.id)}
            style={styles.plantCard}
          >
            <View>
              <Text style={styles.plantName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: '5%',
    marginRight: '5%'
  },
  headerText: {
    fontSize: 20,
    color: '#4FAD22',
    fontWeight: 'bold',
    marginRight: '5%',
    marginLeft: '5%'
  },
  divider: {
    height: 4,
    backgroundColor: '#4FAD22',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    marginBottom: 15,
  },
  plantCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '45%',
    margin: '2.5%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,  
  },
  plantName: {
    fontSize: 16,
    color: '#000',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Garden
