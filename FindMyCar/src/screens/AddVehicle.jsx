import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import {
  Divider,
  Icon,
  Input,
  Text,
  Button,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import Header from '../components/Header';
import { useVehicleContext } from '../VehicleContext';

const BackIcon = props => <Icon {...props} name="arrow-back" fill="#fff" />;

const AddVehicleScreen = ({ navigation }) => {
  const { vehicles, setVehicles } = useVehicleContext();
  const [disabled, setDisabled] = useState(true);
  const [vehicleData, setVehicleData] = useState({
    id: Math.floor(Math.random() * 1000),
    alias: '',
    vehicleMake: '',
    model: '',
    year: '',
    color: '',
    plates: '',
    favorite: false,
  });

  const navigateBack = () => {
    navigation.navigate('Vehicles');
  };

  const addVehicle = newVehicle => {
    setVehicles([...vehicles, newVehicle]);
    navigateBack();
  };

  const handleAddVehicle = () => {
    addVehicle(vehicleData);
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  useEffect(() => {
    const areAllFieldsFilled = Object.values(vehicleData).every(
      value => value !== '',
    );

    setDisabled(!areAllFieldsFilled);
  }, [vehicleData]);

  return (
    <ScrollView style={styles.viewContainer}>
      <Header />
      <Divider />
      <TopNavigation
        title={props => (
          <Text {...props} style={[props.style, { color: 'white' }]}>
            Add Vehicle
          </Text>
        )}
        alignment="center"
        style={styles.topNav}
        accessoryLeft={BackAction}
      />
      <Divider />
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.label}>VEHICLE ALIAS</Text>
          <Input
            style={styles.input}
            placeholder="e.g. My Prius"
            value={vehicleData.alias}
            onChangeText={text =>
              setVehicleData(prevData => ({
                ...prevData,
                alias: text,
              }))
            }
          />
        </View>
        <View>
          <Text style={styles.label}>VEHICLE MAKE</Text>
          <Input
            style={styles.input}
            placeholder="e.g. Toyota"
            value={vehicleData.vehicleMake}
            onChangeText={text =>
              setVehicleData(prevData => ({
                ...prevData,
                vehicleMake: text,
              }))
            }
          />
        </View>
        <View>
          <Text style={styles.label}>MODEL</Text>
          <Input
            style={styles.input}
            placeholder="e.g. Prius"
            value={vehicleData.model}
            onChangeText={text =>
              setVehicleData(prevData => ({ ...prevData, model: text }))
            }
          />
        </View>
        <View>
          <Text style={styles.label}>YEAR</Text>
          <Input
            style={styles.input}
            keyboardType="numeric"
            placeholder="e.g. 2017"
            value={vehicleData.year.toString()}
            onChangeText={text =>
              setVehicleData(prevData => ({
                ...prevData,
                year: text,
              }))
            }
          />
        </View>
        <View>
          <Text style={styles.label}>COLOR</Text>
          <Input
            style={styles.input}
            placeholder="e.g. Black"
            value={vehicleData.color}
            onChangeText={text =>
              setVehicleData(prevData => ({ ...prevData, color: text }))
            }
          />
        </View>
        <View>
          <Text style={styles.label}>PLATES</Text>
          <Input
            style={styles.input}
            placeholder="e.g. ABC123"
            value={vehicleData.plates}
            onChangeText={text =>
              setVehicleData(prevData => ({ ...prevData, plates: text }))
            }
          />
        </View>
      </View>
      <View>
        <Button
          style={styles.button}
          onPress={handleAddVehicle}
          disabled={disabled}>
          Add Vehicle
        </Button>
        <Button style={styles.cancelButton} onPress={navigateBack}>
          Cancel
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topNav: {
    backgroundColor: '#20C5B1',
  },
  viewContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  aliasBox: {
    backgroundColor: '#20C5B1',
  },
  back: {
    height: 25,
    width: 25,
    margin: 10,
  },
  carCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    width: 137,
    height: 137,
    alignSelf: 'center',
    marginBottom: 10,
  },
  aliasContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alias: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  icon: {
    height: 17,
    width: 17,
    marginLeft: 10,
  },
  inputContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    marginBottom: 20,
  },
  label: {
    fontSize: 10,
    color: '#8F9BB3',
    paddingLeft: 20,
    marginBottom: 5,
  },
  button: {
    marginHorizontal: 24,
    marginBottom: 20,
  },
  cancelButton: {
    marginHorizontal: 24,
    marginBottom: 20,
    backgroundColor: '#C5C8CF',
    borderColor: '#C5C8CF',
  },
});

export default AddVehicleScreen;
