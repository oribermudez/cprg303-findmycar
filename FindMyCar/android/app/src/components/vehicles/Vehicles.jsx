import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import { Divider, Button, TopNavigation } from '@ui-kitten/components';
import Header from '../header/Header';
import VehicleCard from './VehicleCard';

const VehiclesScreen = ({ navigation }) => {
  const navigateAddVehicle = () => {
    navigation.navigate('AddVehicle');
  };

  const navigateVehicleDetails = () => {
    console.log('hola, entre');
    navigation.navigate('VehicleDetails');
  };

  const vehicleData = [
    {
      id: 1,
      alias: "Tony's Car",
      vehicle: 'GMC Terrain',
      plates: 'ABC2308',
      favorite: true,
    },
    {
      id: 2,
      alias: 'My Car',
      vehicle: 'Mazda 3',
      plates: 'DEF2308',
      favorite: false,
    },
    {
      id: 3,
      alias: "Mom's Car",
      vehicle: 'Hyndai Elantra',
      plates: 'GHI2308',
      favorite: false,
    },
    {
      id: 4,
      alias: "Mario's Car",
      vehicle: 'Honda Civic',
      plates: 'JKL2308',
      favorite: false,
    },
  ];

  const renderVehicleCard = ({ item }) => (
    <VehicleCard
      alias={item.alias}
      vehicle={item.vehicle}
      plates={item.plates}
      favorite={item.favorite}
      onPress={navigateVehicleDetails}
    />
  );

  return (
    <SafeAreaView>
      <Header />
      <Divider />
      <TopNavigation
        title={props => (
          <Text {...props} style={[props.style, { color: 'white' }]}>
            Vehicles
          </Text>
        )}
        alignment="center"
        style={styles.topNav}
      />
      <Divider />
      <FlatList
        data={vehicleData}
        renderItem={renderVehicleCard}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
      <Button style={styles.button} onPress={navigateAddVehicle}>
        Add Vehicle
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  topNav: {
    backgroundColor: '#20C5B1',
  },
  button: {
    marginHorizontal: 24,
    marginBottom: 20,
  },
  flatListContainer: {
    alignItems: 'center',
    display: 'flex',
    marginHorizontal: 20,
    marginTop: 20,
  },
});

export default VehiclesScreen;
