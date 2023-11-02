import React from 'react';
import { Card, Text, Icon } from '@ui-kitten/components';
import { View, Image, StyleSheet, Pressable } from 'react-native';

const VehicleCard = ({ alias, vehicle, plates, favorite, onPress }) => (
  <Pressable onPress={onPress}>
    <Card style={styles.card}>
      <View style={styles.box}>
        <View style={styles.dataBox}>
          <View style={styles.aliasContainer}>
            <Text style={styles.alias}>{alias}</Text>
            {favorite && (
              <Icon fill="#FFC10F" name="star" style={styles.icon} />
            )}
          </View>
          <View style={styles.dataContainer}>
            <View style={styles.data}>
              <Text style={styles.label}>VEHICLE</Text>
              <Text style={styles.dataText}>{vehicle}</Text>
            </View>
            <View style={styles.data}>
              <Text style={styles.label}>PLATES</Text>
              <Text style={styles.dataText}>{plates}</Text>
            </View>
          </View>
        </View>
        <Image source={require('./car.png')} style={styles.carImage} />
      </View>
    </Card>
  </Pressable>
);

const styles = StyleSheet.create({
  card: {
    height: 90,
    marginBottom: 20,
  },
  aliasContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 7,
  },
  alias: {
    fontFamily: 'Open Sans',
    fontSize: 13,
    fontWeight: '700',
  },
  icon: {
    height: 17,
    width: 17,
    marginLeft: 10,
  },
  label: {
    fontSize: 10,
    color: '#8F9BB3',
  },
  dataContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  data: {
    height: 35,
  },
  dataText: {
    fontFamily: 'Open Sans',
    fontSize: 12,
  },
  carImage: {
    width: 75,
    height: 75,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  dataBox: {
    width: '65%',
    marginRight: 25,
    paddingRight: 10,
  },
});

export default VehicleCard;
