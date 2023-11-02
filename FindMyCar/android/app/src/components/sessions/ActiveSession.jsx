import React from 'react';
import { SafeAreaView } from 'react-native';
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
      <Card>
    <Text>
      The Maldives, officially the Republic of Maldives, is a small country in South Asia,
      located in the Arabian Sea of the Indian Ocean.
      It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
    </Text>
  </Card>
    </SafeAreaView>
  );
};

export default ActiveSessionScreen;
