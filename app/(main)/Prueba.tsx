import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { NavigationProp } from '@react-navigation/native';

const Prueba = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [isHappy, setIsHappy] = useState(true);

  const toggleImage = () => {
    setIsHappy(!isHappy);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Agro City</Text>
      <View style={styles.plantContainer}>
        <Text style={styles.subtitle}>Tu maceta está feliz:</Text>
        <TouchableOpacity onPress={toggleImage}>
          <Image 
            source={{ 
              uri: isHappy 
                ? 'https://static.vecteezy.com/system/resources/thumbnails/048/343/317/small/cartoon-plant-logo-in-a-pot-with-a-happy-face-png.png' 
                : 'https://static.vecteezy.com/system/resources/previews/003/453/248/non_2x/disappointed-expression-of-the-plant-pot-cartoon-free-vector.jpg'
            }} 
            style={styles.image} 
            resizeMode="contain" 
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.content}>Prueba</Text>
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
    marginBottom: '30%',
    marginTop: '10%'
  },
  plantContainer: {
    backgroundColor: '#fff', 
    borderRadius: 10,
    padding: 10, 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5, 
    elevation: 5,
    alignItems: 'center', 
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#000', 
    marginBottom: 10,
  },
  image: {
    width: 200, 
    height: 200,
  },
  content: {
    fontSize: 18,
    color: '#333',
  },
});

export default Prueba;
