import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, Touchable, TouchableOpacity } from 'react-native'
import { UserPlant } from '@/interfaces/Plants'
import { getUserPlants } from '@/services/PlantsSercie'
import { NavigationProp } from '@react-navigation/native'

const Garden = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [userPlants, setUserPlants] = useState<UserPlant[]>([])


  const handleAddPlant = () => {
    navigation.navigate('AddPlant')
  }

  useEffect(() => {
    const getPlants = async () => {
      const response = await getUserPlants()
      if (response instanceof Array) {
        setUserPlants(response)
      }else {
        alert(response.error)
      }
    }

    getPlants()
  }, [])

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
