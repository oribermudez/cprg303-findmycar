import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
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

      <Card>
    <Text>
      The Maldives, officially the Republic of Maldives, is a small country in South Asia,
      located in the Arabian Sea of the Indian Ocean.
      It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
    </Text>
  </Card>

      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category="h1">HOLAA</Text>
      </Layout>

      <View style={styles.carView}>
      <View style={styles.aliasContainer}>
            <Text style={styles.alias}>Tony's Car </Text>
            {favorite && (
              <Icon fill="#FFC10F" name="star" style={styles.icon} />
            )}
          </View>
  </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  carView: {
    backgroundColor: '#20C5B1',
    width: '100%',
    height: 176
  },
  aliasContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 7,
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
});

export default ActiveSessionScreen;
