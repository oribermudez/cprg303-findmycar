import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  Linking,
  Alert,
} from 'react-native';
import { Divider, Icon, Text, Button } from '@ui-kitten/components';
import Header from '../components/Header';
import Timer from '../components/Timer';
import { useVehicleContext } from '../VehicleContext';

const ActiveSessionScreen = ({ navigation, route }) => {
  const { sessionData } = route.params;
  const { vehicles, location } = useVehicleContext();
  const [selectedVehicle, setSelectedVehicle] = useState({});
  const [address, setAddress] = useState('');
  const [visible, setVisible] = useState(false);

  const navigateHome = () => {
    navigation.navigate('Parking');
  };

  useEffect(() => {
    const selectedVehicle = vehicles.find(
      vehicle => vehicle.alias === sessionData.alias,
    );
    setSelectedVehicle(selectedVehicle);
  }, [vehicles, sessionData]);

  const openGoogleMaps = async () => {
    const { latitude, longitude } = location;
    const label = 'My vehicle';
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&destination_place_id=${label}`;

    Linking.canOpenURL(url)
      .then(response => {
        if (response) {
          return Linking.openURL(url);
        } else {
          Alert.alert('Error', 'Google Maps is not installed on your device.');
        }
      })
      .catch(err => console.error('An error occurred', err));
  };

  const toggleModal = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Header />
        <Divider />
        <Divider />

        <View style={styles.carView}>
          <Image
            source={require('../assets/white-car.png')}
            style={styles.carImage}
          />
          <View style={styles.aliasContainer}>
            <Text style={styles.alias}>
              {sessionData.alias}
              {selectedVehicle.favorite && (
                <Icon fill="#FFC10F" name="star" style={styles.icon} />
              )}
            </Text>

            <Text style={styles.alias}>{selectedVehicle.plates}</Text>
          </View>
        </View>
        <View>
          <Timer
            parkingFee={sessionData.parkingFee}
            parkingZone={sessionData.parkingZone}
            address={address}
            navigateHome={navigateHome}
            toggleModal={toggleModal}
            visible={visible}
          />
        </View>
        {visible && <View style={styles.overlay}></View>}

        <Button style={styles.takeMeButton} onPress={openGoogleMaps}>
          <Text style={styles.buttonText}>Take me to my vehicle</Text>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrappingView: {
    padding: 30,
  },
  takeMeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#20C5B1',
    width: '90%',
    height: 50,
    borderRadius: 5,
    marginRight: 20,
    marginLeft: 20,
  },
  buttonText: {
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#ffff',
  },
  carView: {
    backgroundColor: '#20C5B1',
    width: '100%',
    height: 176,
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
  },
  aliasContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  alias: {
    fontFamily: 'Open Sans',
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  icon: {
    height: 13,
    width: 13,
    marginLeft: 10,
    marginRight: 20,
  },
  mapImage: {
    width: 50,
    height: 50,
  },
  cardMap: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 80,
  },
  mapViewContainer: {
    flexDirection: 'row',
  },
  locationText: {
    fontFamily: 'Open Sans',
    color: '#8F9BB3',
    fontSize: 10,
  },
  addressText: {
    color: '#000000',
    fontSize: 12,
  },
  mapContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  parkingTimeView: {
    width: '80%',
    margin: 40,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  parkingTimeText: {
    fontFamily: 'Open Sans',
    color: '#8F9BB3',
    fontSize: 12,
  },
  parkingTime: {
    fontFamily: 'Open Sans',
    fontWeight: '700',
    //space between the numbers
    letterSpacing: 3,
    color: '#000000',
    fontSize: 30,
  },
  boxesInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    height: 50,
    marginHorizontal: 40,
  },
  infoTitleText: {
    fontFamily: 'Open Sans',
    color: '#8F9BB3',
    fontSize: 12,
  },
  infoText: {
    fontFamily: 'Open Sans',
    color: '#000000',
    fontSize: 14,
  },
  calculatedFeeContainer: {
    width: '80%',
    margin: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calculatedFeeText: {
    fontFamily: 'Open Sans',
    color: '#8F9BB3',
    fontSize: 12,
  },
  calculatedFee: {
    fontFamily: 'Open Sans',
    fontWeight: '700',
    //space between the numbers
    letterSpacing: 2,
    color: '#20C5B1',
    fontSize: 30,
  },
  button: {
    marginHorizontal: 24,
    marginBottom: 20,
  },
  carImage: {
    width: 90,
    height: 90,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
});

export default ActiveSessionScreen;
