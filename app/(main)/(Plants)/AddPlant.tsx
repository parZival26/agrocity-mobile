import { DropDownPicker } from '@/components/inputs/DropDowPicker'
import { PlantWiki } from '@/interfaces/Plants'
import { createUserPlant } from '@/services/PlantsService'
import { getPlants } from '@/services/WikiService'
import { NavigationProp, RouteProp } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'


const AddPlant = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const [plants, setPlants] = useState<PlantWiki[]>([])
    const [selectedPlant, setSelectedPlant] = useState('')
    const [plantName, setPlantName] = useState('')


    const handleAddPlant = async () => {
        if (selectedPlant === '') {
            alert('Please select a plant')
            return
        }
        const response = await createUserPlant({ plantId: parseInt(selectedPlant), name: plantName })
        if ('error' in response) {
            alert(response.error)
        } else {
            navigation.navigate('Garden')
        }
    }


    useEffect(() => {
        const getAddPlants = async () => {
            const response = await getPlants()
            if (response instanceof Array) {
                setPlants(response)
            } else {
                alert(response.error)
            }
        }
        getAddPlants()
    }, [])



    return (
        <SafeAreaView>
            <Text>Add Plant</Text>
            <TextInput 
            placeholder='Plant Name'
            onChangeText={(text) => setPlantName(text)}
            />
            <DropDownPicker
                label='Plant'
                data={plants.map(plant => ({ key: plant.id.toString(), value: plant.commonName }))}
                placeholder='Select a plant'
                setSelected={(value) => setSelectedPlant(value)}
                value={{ key: '', value: '' }}
            />
            <TouchableOpacity
                style={{ backgroundColor: 'green', padding: 10 }}
                onPress={handleAddPlant}
            >
                <Text>Add Plant</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default AddPlant
