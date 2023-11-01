import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Divider } from '@ui-kitten/components';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Header from './Header';

import { check, PERMISSIONS, request } from 'react-native-permissions';

const ParkingScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
      .then(result => {
        switch (result) {
          case 'granted':
            Geolocation.getCurrentPosition(
              position => {
                setLocation(position.coords);
              },
              error => {
                console.warn('Error getting location:', error);
              },
              { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
            );
            break;
          case 'denied':
            request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
              // Handle the result
            });
            break;
          default:
            // Handle other cases
            break;
        }
      })
      .catch(error => {
        console.warn('Error checking location permission:', error);
      });
  }, []);

  const navigateDetails = () => {
    navigation.navigate('ParkingForm');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Divider />
      {location?.latitude && (
        <MapView
          ref={mapRef}
          style={styles.mapStyle}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            draggable
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'You are here'}
          />
        </MapView>
      )}
      <View style={styles.buttonContainer}>
        <Button style={styles.button} onPress={navigateDetails}>
          Start Parking Session
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    margin: 8,
    width: '80%',
  },
});

export default ParkingScreen;
