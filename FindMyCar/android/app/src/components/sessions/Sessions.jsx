import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import {
  Button,
  Divider,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
  Select,
  SelectItem,
  IndexPath,
} from '@ui-kitten/components';
import Header from '../header/Header';
import { useVehicleContext } from '../../VehicleContext';


const BackIcon = props => <Icon {...props} name="arrow-back" />;

const SessionsScreen = ({ navigation }) => {
  const { vehicles } = useVehicleContext();

  const navigateBack = () => {
    navigation.navigate('Parking');
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const [parkingFee, setParkingFee] = useState('2.5');
  const [parkingZone, setParkingZone] = useState('15278');
  const [time, setTime] = useState('');

  const [vehicle, setVehicle] = useState(new IndexPath(0));


  const renderOption = (item, index) => (
    <SelectItem key={index} title={item.alias} />
  );

  const navigateDetails = () => {
    navigation.navigate('ActiveSession', { alias: 'My Car', parkingFee: 6, parkingZone: 'SADAS' });
  };

  const [formValues, setFormValues] = useState({
    vehicle: '',
    parkingFee: '',
    parkingZone: '',
    time: '',
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Divider />
      <TopNavigation
        title={props => (
          <Text {...props} style={[props.style, { color: 'white' }]}>
            Start Parking Session
          </Text>
        )}
        alignment="center"
        accessoryLeft={BackAction}
        style={styles.topNav}
      />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.formControl}>
          <Text>VEHICLE</Text>
          <Layout>
            <Select
              vehicle={vehicle}
              value={vehicles[vehicle.row].alias}
              onSelect={index => {
                setVehicle(index);
                setFormValues(prev => ({ ...prev, vehicle: vehicles[index-1].alias }));
              }}
              style={{ width: 200}}
              >
              {vehicles.map(renderOption)}
            </Select>
          </Layout>

        </View>
        <View style={styles.formControl}>
          <Text>PARKING FEE</Text>
          <TextInput
            style={styles.input}
            value={parkingFee}
            onChangeText={value => {
              setParkingFee(value);
              setFormValues(prev => ({ ...prev, parkingFee: value }));
            }}

          />
        </View>
        <View style={styles.formControl}>
          <Text>PARKING ZONE</Text>
          <TextInput
            style={styles.input}
            value={parkingZone}
            onChangeText={value => {
              setParkingZone(value);
              setFormValues(prev => ({ ...prev, parkingZone: value }))}
            }
          />
        </View>
        <View style={styles.formControl}>
          <Text>TIME</Text>
          <TextInput 
          style={styles.input} 
          value={time} 
          onChangeText={value => {
            setTime(value);
            setFormValues(prev => ({ ...prev, time: value }))}
          } 
          />
        </View>
        <Button onPress={() => navigateDetails(formValues)} style={styles.myButton}>
          Start Session
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topNav: {
    backgroundColor: '#20C5B1',
  },
  input: {
    borderColor: '#718096',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 14,
  },
  myButton: {
    marginTop: 20,
    width: 200,
  },
  formControl: {
    display: 'flex',
    marginVertical: 5,
  },
});

export default SessionsScreen;
