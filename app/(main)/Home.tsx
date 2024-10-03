import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>AgroCity</Text>

      <View style={styles.huertasContainer}>
        <Text style={styles.huertasText}>Tus huertas</Text>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faSquarePlus} size={24} color="#4FAD22" />
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <View style={styles.cuadrosContainer}>
        <View style={styles.cuadro} />
        <View style={styles.cuadro} />
      </View>
    </SafeAreaView>
  );
};

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
    marginTop: '5%'
  },
  huertasContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: '5%',
    marginRight: '5%'
  },
  huertasText: {
    fontSize: 20,
    color: '#4FAD22',
    fontWeight: 'bold',
  },
  divider: {
    height: 4,
    backgroundColor: '#4FAD22',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    marginBottom: 15
  },
  cuadrosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '5%',
    marginRight: '5%',
  },
  cuadro: {
    width: '45%',
    height: 160,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, 
  },
});

export default Home;
