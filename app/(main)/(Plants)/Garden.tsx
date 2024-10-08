import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, Text, Touchable, TouchableOpacity } from 'react-native'
import { UserPlant } from '@/interfaces/Plants'
import { getUserPlants } from '@/services/PlantsService'
import { NavigationProp, useIsFocused } from '@react-navigation/native'
import { ThemedView } from '@/components/ThemedView'

const Garden = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [userPlants, setUserPlants] = useState<UserPlant[]>([])
  const [loading, setLoading] = useState(true)
  const isFocused = useIsFocused();


  const handleAddPlant = () => {
    navigation.navigate('AddPlant')
  }

  useEffect(() => {


    const getPlants = async () => {
      const response = await getUserPlants()

      

      if (response instanceof Array) {
        setUserPlants(response)
  

        setLoading(false)
      }else {
        alert(response.error)
      }
    }

    if (isFocused) {
      getPlants()
    }
    


    

    
  }, [isFocused])

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
    <SafeAreaView>
      <Text>Garden</Text>
      <TouchableOpacity
        style={{ backgroundColor: 'green', padding: 10 }}
        onPress={handleAddPlant}
      >
        <Text>Add Plant</Text>
      </TouchableOpacity>
      {userPlants.map((plant) => (
        <Text key={plant.id}>{plant.name}</Text>
      ))}
    </SafeAreaView>
  )
}

export default Garden
