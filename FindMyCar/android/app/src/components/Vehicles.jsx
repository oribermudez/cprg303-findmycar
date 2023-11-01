import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import {
  Divider,
  Icon,
  Button,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import Header from './Header';

const BackIcon = props => <Icon {...props} name="arrow-back" />;

const VehiclesScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateAddVehicle = () => {
    navigation.navigate('AddVehicle');
  };

  const navigateVehicleDetails = () => {
    navigation.navigate('VehicleDetails');
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Divider />
      <TopNavigation
        title="Vehicles"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Button style={styles.button} onPress={navigateAddVehicle}>
        Add Vehicles
      </Button>
      <Button style={styles.button} onPress={navigateVehicleDetails}>
        Vehicle Details
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    margin: 8,
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VehiclesScreen;
