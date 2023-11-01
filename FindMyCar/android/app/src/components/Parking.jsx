import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

const ParkingScreen = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate('ParkingForm');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Parking" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}>Start Parking Session</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default ParkingScreen;
