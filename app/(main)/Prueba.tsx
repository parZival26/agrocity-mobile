import { NavigationProp } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, Text } from 'react-native'

const Prueba = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <SafeAreaView>
        <Text>Prueba</Text>
    </SafeAreaView>
  )
}

export default Prueba
