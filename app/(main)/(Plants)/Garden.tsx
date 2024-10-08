import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, StyleSheet, View } from 'react-native'
import { UserPlant } from '@/interfaces/Plants'
import { getUserPlants } from '@/services/PlantsSercie'

const Garden = () => {
  const [userPlants, setUserPlants] = useState<UserPlant[]>([])

  useEffect(() => {
    const getPlants = async () => {
      const response = await getUserPlants()
      if (response instanceof Array) {
        setUserPlants(response)
      } else {
        alert(response.error)
      }
    }

    getPlants()
  }, [])

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>AgroCity</Text>

      <View style={styles.plantList}>
        {userPlants.map((plant) => (
          <Text key={plant.id} style={styles.plantName}>
            {plant.name}
          </Text>
        ))}
      </View>
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
    marginBottom: '10%',
    marginTop: '10%'
  },
  plantList: {
    marginTop: 16,
    color: 'black',
  },
  plantName: {
    fontSize: 18,
    marginBottom: 8,
    color: 'black'
  },
})

export default Garden
