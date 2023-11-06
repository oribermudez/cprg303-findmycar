import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import { Divider, Button, TopNavigation } from '@ui-kitten/components';
import Header from '../header/Header';
import VehicleCard from './VehicleCard';
import { useVehicleContext } from '../../VehicleContext';

const VehiclesScreen = ({ navigation }) => {
  const { vehicles } = useVehicleContext();

  const navigateAddVehicle = () => {
    navigation.navigate('AddVehicle');
  };

  const navigateVehicleDetails = vehicle => {
    navigation.navigate('VehicleDetails', { vehicle });
  };

  const renderVehicleCard = ({ item }) => (
    <VehicleCard
      alias={item.alias}
      vehicle={`${item.vehicleMake} ${item.model}`}
      plates={item.plates}
      favorite={item.favorite}
      onPress={() => navigateVehicleDetails(item)}
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
        data={vehicles}
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
