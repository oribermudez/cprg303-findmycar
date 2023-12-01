import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

import { Card, Button } from '@ui-kitten/components';

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = time => {
  const hrs = Math.floor(time / 3600);
  const mins = Math.floor(time / 60);
  const secs = time - mins * 60;
  return {
    hrs: formatNumber(hrs),
    mins: formatNumber(mins),
    secs: formatNumber(secs),
  };
};

const Timer = ({ parkingFee, parkingZone, address }) => {
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const { hrs, mins, secs } = getRemaining(remainingSecs);
  const [calculatedFee, setCalculatedFee] = useState(0);

  reset = () => {
    setRemainingSecs(0);
    setIsActive(false);
    setCalculatedFee(0);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs(remainingSecs => remainingSecs + 1);
        setCalculatedFee(calculatedFee => calculatedFee + parkingFee / 3600); // Update calculated fee every second
      }, 1000);
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.parkingTimeText}>PARKING TIME</Text>
        <Text style={styles.timerText}>{`${hrs}:${mins}:${secs}`}</Text>

        {/* View container for the 3 boxes */}
        <View style={styles.boxesInfoContainer}>
          <View style={styles.zoneContainer}>
            <Text style={styles.infoTitleText}> ZONE </Text>
            <Text style={styles.infoText}> {parkingZone} </Text>
          </View>

          <View style={styles.FeeContainer}>
            <Text style={styles.infoTitleText}> FEE PER HOUR </Text>
            <Text style={styles.infoText}> ${parkingFee} CAD </Text>
          </View>

          <View style={styles.statusContainer}>
            <Text style={styles.infoTitleText}> STATUS </Text>
            <Text style={styles.infoText}> Active </Text>
          </View>
        </View>

        {/* CALCULATED FEE CONTAINER */}
        <View style={styles.calculatedFeeContainer}>
          <Text style={styles.calculatedFeeText}> CALCULATED PARKING FEE </Text>
          <Text style={styles.calculatedFee}>
            {' '}
            ${calculatedFee.toFixed(2)} CAD{' '}
          </Text>
        </View>

        <View style={styles.wrappingView}>
          <Card style={styles.cardMap}>
            <View style={styles.mapViewContainer}>
              <View style={styles.mapContainer}>
                <Text style={styles.locationText}>LOCATION</Text>
                <Text style={styles.addressText}>{address}</Text>
              </View>
              <View>
                <Image source={require('./map.png')} style={styles.mapImage} />
              </View>
            </View>
          </Card>
        </View>

        {/* Start and Reset buttons */}
        <Button
          onPress={() => setIsActive(!isActive)}
          style={styles.cancelButton}>
          End Parking Session
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonStart: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#20C5B1',
    borderRadius: 5,
  },

  buttonReset: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#20C5B1',
    width: '90%',
    height: 50,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#ffff',
  },
  timerText: {
    fontFamily: 'Open Sans',
    fontWeight: '700',
    //space between the numbers
    letterSpacing: 3,
    color: '#000000',
    fontSize: 30,
    marginBottom: 20,
  },
  parkingTimeText: {
    marginTop: 20,
    fontFamily: 'Open Sans',
    color: '#8F9BB3',
    fontSize: 12,
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
    margin: 20,
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
  wrappingView: {
    padding: 20,
    width: '100%',
  },
  mapImage: {
    width: 50,
    height: 50,
  },
  cardMap: {
    backgroundColor: '#FFFFFF',
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
  cancelButton: {
    width: '90%',
    marginBottom: 20,
    backgroundColor: '#C5C8CF',
    borderColor: '#C5C8CF',
  },
});

export default Timer;
