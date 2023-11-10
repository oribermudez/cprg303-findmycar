import React from 'react';
import { SafeAreaView, View, StyleSheet, Image } from 'react-native';
import {
  Card,
  Divider,
  Icon,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import Header from '../header/Header';

const BackIcon = props => <Icon {...props} name="arrow-back" />;

const ActiveSessionScreen = ({ navigation }) => {
  const favorite = true;
  const navigateBack = () => {
    navigation.navigate('Sessions');
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Divider />
      <TopNavigation
        title="Active Session"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />

      <View style={styles.carView}>
        <View style={styles.aliasContainer}>
          <Text style={styles.alias}>Tony's Car </Text>
          {favorite && (
            <Icon fill="#FFC10F" name="star" style={styles.icon} />
          )}
          <Text style={styles.alias}>CPRG303</Text>
        </View>
        
      </View>

      {/* Wrapping view for everything  */}
      <View style={styles.wrappingView}>
      <View style={styles.parkingTimeView}>
        <Text style={styles.parkingTimeText}>PARKING TIME</Text>
        <Text style={styles.parkingTime}>01:39:00</Text>
      </View>

      <View style={styles.zoneFeeStatusContainer}>
        <Text style={styles.zoneText}> ZONE </Text>
        <Text style={styles.feeText}> FEE PER HOUR </Text>
        <Text style={styles.statusText}> STATUS </Text>

      </View>
      <Card style={styles.cardMap}>
        <View style={styles.mapViewContainer}>
          <View style={styles.mapContainer} >
            <Text style={styles.locationText}>LOCATION</Text>
            <Text style={styles.addressText}>1234 Main St. Vancouver BC</Text>
          </View>
          <View >
            <Image source={require('./map.png')} style={styles.mapImage} />
          </View>
        </View>
      </Card>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrappingView:{
    padding: 20,

  },
  carView: {
    backgroundColor: '#20C5B1',
    width: '100%',
    height: 176,
  },
  aliasContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 7,
    spaceBetween: 'space-between',
  },
  alias: {
    fontFamily: 'Open Sans',
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  icon: {
    height: 17,
    width: 17,
    marginLeft: 10,
  },
  mapImage: {
    width: 50,
    height: 50,
  },
  cardMap: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 100,
    padding: 10,
  },
  mapViewContainer:{
    flexDirection: 'row',

    
  },
  locationText:{
    fontFamily: 'Open Sans',
    color: '#8F9BB3',
    fontSize: 10,
  },
  addressText:{
    color: '#000000',
    fontSize: 12,
  },
  mapContainer:{
    flexGrow: 1,
    justifyContent: 'center',
  },
  parkingTimeView:{
    width: '80%',
    margin: 40,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  parkingTimeText:{
    fontFamily: 'Open Sans',
    color: '#8F9BB3',
    fontSize: 12,
  },
  parkingTime:{
    fontFamily: 'Open Sans',
    fontWeight: '700',
    //space between the numbers
    letterSpacing: 3,
    color: '#000000',
    fontSize: 30,
  },
  
});

export default ActiveSessionScreen;
