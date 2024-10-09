import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { NavigationProp, RouteProp, useRoute } from '@react-navigation/native';

type IndexRouteProp = RouteProp<{ IndexDetail: { id: number } }, 'IndexDetail'>;

const Index = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const route = useRoute<IndexRouteProp>();
  const { id } = route.params;

  const [isHappy, setIsHappy] = useState(true);

  const toggleImage = () => {
    setIsHappy(!isHappy);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>AgroCity</Text>

      <View style={styles.plantContainer}>
        <Text style={styles.subtitle}>Cuida a tu maceta:</Text>
        <TouchableOpacity onPress={toggleImage}>
          <Image
            source={{
              uri: isHappy
                ? 'https://static.vecteezy.com/system/resources/thumbnails/048/343/317/small/cartoon-plant-logo-in-a-pot-with-a-happy-face-png.png'
                : 'https://static.vecteezy.com/system/resources/previews/003/453/248/non_2x/disappointed-expression-of-the-plant-pot-cartoon-free-vector.jpg',
            }}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.taskbutton} onPress={() => navigation.navigate('Task')}>
        <Text style={styles.subtitle}>Haz tus misiones</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8E7', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4FAD22',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  idText: {
    fontSize: 18,
    color: '#333',
  },
  plantContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  taskbutton: {
    paddingLeft: '7%',
    paddingRight: '7%',
    paddingBottom: '3%',
    paddingTop: '3%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Index;
