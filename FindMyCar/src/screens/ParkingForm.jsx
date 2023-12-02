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
  Select,
  SelectItem,
  IndexPath,
} from '@ui-kitten/components';
import Header from '../components/Header';
import { useVehicleContext } from '../VehicleContext';

const BackIcon = props => <Icon {...props} name="arrow-back" fill="#fff" />;

const ParkingFormScreen = ({ navigation }) => {
  const { vehicles } = useVehicleContext();
  const [disabled, setDisabled] = useState(true);
  const [selected, setSelected] = useState(new IndexPath(0));
  const [sessionData, setSessionData] = useState({
    alias: vehicles[0].alias,
    parkingFee: '',
    parkingZone: '',
  });

  const navigateBack = () => {
    navigation.navigate('Parking');
  };

  const navigateActiveSession = () => {
    navigation.navigate('ActiveSession', { sessionData });
  };

  const renderOption = (item, index) => (
    <SelectItem key={index} title={item.alias} />
  );

  const handleStartSession = () => {
    navigateActiveSession();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  useEffect(() => {
    const areAllFieldsFilled = Object.values(sessionData).every(
      value => value !== '',
    );

    setDisabled(!areAllFieldsFilled);
  }, [sessionData]);

  return (
    <ScrollView style={styles.viewContainer}>
      <Header />
      <Divider />
      <TopNavigation
        title={props => (
          <Text {...props} style={[props.style, { color: 'white' }]}>
            Parking Session
          </Text>
        )}
        alignment="center"
        style={styles.topNav}
        accessoryLeft={BackAction}
      />
      <Divider />
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.label}>VEHICLE</Text>
          <Select
            style={styles.select}
            value={vehicles[selected.row].alias}
            onSelect={index => {
              setSelected(index);
              setSessionData(prev => ({
                ...prev,
                alias: vehicles[index - 1].alias,
              }));
            }}>
            {vehicles.map(renderOption)}
          </Select>
        </View>
        <View>
          <Text style={styles.label}>PARKING FEE</Text>
          <Input
            style={styles.input}
            keyboardType="numeric"
            placeholder="e.g. 2.5"
            value={sessionData.parkingFee}
            onChangeText={text =>
              setSessionData(prevData => ({
                ...prevData,
                parkingFee: text,
              }))
            }
          />
        </View>
        <View>
          <Text style={styles.label}>PARKING ZONE</Text>
          <Input
            style={styles.input}
            keyboardType="numeric"
            placeholder="e.g. 3769"
            value={sessionData.parkingZone}
            onChangeText={text =>
              setSessionData(prevData => ({ ...prevData, parkingZone: text }))
            }
          />
        </View>
      </View>
      <View>
        <Button
          style={styles.button}
          onPress={handleStartSession}
          disabled={disabled}>
          Start Parking Session
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
  select: {
    marginBottom: 20,
  },
});

export default ParkingFormScreen;
