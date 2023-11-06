import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Pressable, Image } from 'react-native';
import { Divider, Icon, Input, Text, Button } from '@ui-kitten/components';
import Header from '../header/Header';
import { vehicleFunction } from './VehicleFactory';

const VehicleDetailsScreen = ({ navigation, route }) => {
  const { vehicle } = route.params;
  const [disabled, setDisabled] = useState(true);
  const [editedVehicleData, setEditedVehicleData] = useState({ ...vehicle });

  // Use useEffect to update editedVehicleData when route.params change
  useEffect(() => {
    setEditedVehicleData({ ...vehicle });
  }, [vehicle]);

  const navigateBack = () => {
    navigation.navigate('Vehicles');
    setDisabled(true);
  };

  const handleSaveChanges = () => {
    vehicleFunction(editedVehicleData);
    setDisabled(true);
  };

  return (
    <ScrollView style={styles.viewContainer}>
      <Header />
      <Divider />
      <View style={styles.aliasBox}>
        <Pressable onPress={navigateBack}>
          <Icon fill="#fff" name="arrow-back" style={styles.back} />
        </Pressable>
        <View style={styles.carCard}>
          <Image
            source={require('./car-details.png')}
            alt="Car Image"
            style={styles.image}
          />
          <View style={styles.aliasContainer}>
            <Text style={styles.alias}>{vehicle?.alias}</Text>
            {vehicle?.favorite && (
              <Icon fill="#FFC10F" name="star" style={styles.icon} />
            )}
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.label}>VEHICLE MAKE</Text>
          <Input
            style={styles.input}
            placeholder="Toyota"
            value={editedVehicleData.vehicleMake}
            onChangeText={text =>
              setEditedVehicleData(prevData => ({
                ...prevData,
                vehicleMake: text,
              }))
            }
            disabled={disabled}
          />
        </View>
        <View>
          <Text style={styles.label}>MODEL</Text>
          <Input
            style={styles.input}
            placeholder="Prius"
            value={editedVehicleData.model}
            onChangeText={text =>
              setEditedVehicleData(prevData => ({ ...prevData, model: text }))
            }
            disabled={disabled}
          />
        </View>
        <View>
          <Text style={styles.label}>YEAR</Text>
          <Input
            style={styles.input}
            placeholder="2017"
            value={editedVehicleData.year.toString()}
            onChangeText={text =>
              setEditedVehicleData(prevData => ({
                ...prevData,
                year: parseInt(text, 10),
              }))
            }
            disabled={disabled}
          />
        </View>
        <View>
          <Text style={styles.label}>COLOR</Text>
          <Input
            style={styles.input}
            placeholder="Black"
            value={editedVehicleData.color}
            onChangeText={text =>
              setEditedVehicleData(prevData => ({ ...prevData, color: text }))
            }
            disabled={disabled}
          />
        </View>
        <View>
          <Text style={styles.label}>PLATES</Text>
          <Input
            style={styles.input}
            placeholder="ABC123"
            value={editedVehicleData.plates}
            onChangeText={text =>
              setEditedVehicleData(prevData => ({ ...prevData, plates: text }))
            }
            disabled={disabled}
          />
        </View>
      </View>
      {disabled ? (
        <Button style={styles.button} onPress={() => setDisabled(false)}>
          Edit Vehicle
        </Button>
      ) : (
        <View>
          <Button style={styles.button} onPress={handleSaveChanges}>
            Save Changes
          </Button>
          <Button style={styles.cancelButton} onPress={() => setDisabled(true)}>
            Cancel
          </Button>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

export default VehicleDetailsScreen;
