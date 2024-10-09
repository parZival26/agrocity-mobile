import { NavigationProp, RouteProp, useRoute } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView, Text } from 'react-native'

type IndexRouteProp = RouteProp<{ IndexDetail: { id: number } }, 'IndexDetail'>;

const Index = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const route = useRoute<IndexRouteProp>();
    const { id } = route.params;


    return (
        <SafeAreaView>
            <Text>Plant Care</Text>
            <Text>ID: {id}</Text>
        </SafeAreaView>
    )
}

export default Index