import { DropDownPicker } from '@/components/inputs/DropDowPicker'
import { PlantWiki } from '@/interfaces/Plants'
import { createUserPlant } from '@/services/PlantsService'
import { getPlants } from '@/services/WikiService'
import { NavigationProp } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native'

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
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>AgroCity</Text>

            <View style={styles.addcontainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Plant Name'
                    placeholderTextColor="#7d7d7d"
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
                    style={styles.button}
                    onPress={handleAddPlant}
                >
                    <Text style={styles.buttonText}>Add Plant</Text>
                </TouchableOpacity>
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
        marginBottom: '5%',
        marginTop: '5%',
    },
    addcontainer: {
        marginTop: '40%',
        marginLeft: '5%',
        marginRight: '5%'
    },
    input: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
        color: '#000',
    },
    button: {
        backgroundColor: '#4FAD22', 
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default AddPlant
