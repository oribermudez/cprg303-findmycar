import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.logo} source={require('./logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // You can change the background color to your preference
  },
  logo: {
    width: 180, // Adjust the width and height as needed for your logo
    height: 40,
  },
});

export default Header;
