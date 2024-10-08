import { PlantWiki } from '@/interfaces/Plants'
import { getPlants } from '@/services/WikiService'
import { NavigationProp, RouteProp } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView } from 'react-native'


const AddPlant = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const [plants, setPlants] = useState<PlantWiki[]>([])


    useEffect(() => {
        const getAddPlants = async () => {
            const response = await getPlants()
            if (response instanceof Array) {
                setPlants(response)
            } else {
                alert(response.error)
            }
        }

        getPlants()
    }, [])

    return (
        <SafeAreaView>
            <Text>Add Plant</Text>
        </SafeAreaView>
    )
}

export default AddPlant
