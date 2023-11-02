import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import Header from '../header/Header';

const SessionsScreen = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate('ActiveSession');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Divider />
      <TopNavigation title="Sessions" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}>Active Session</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default SessionsScreen;
