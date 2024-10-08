import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { UserPlant } from '@/interfaces/Plants'
import { getUserPlants } from '@/services/PlantsSercie'

const Garden = () => {
  const [userPlants, setUserPlants] = useState<UserPlant[]>([])

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
      {userPlants.map((plant) => (
        <Text key={plant.id}>{plant.name}</Text>
      ))}
    </SafeAreaView>
  )
}

export default Garden
