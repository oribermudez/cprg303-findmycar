import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon, // Import the Icon component
} from '@ui-kitten/components';
import ParkingScreen from './components/Parking';
import VehiclesScreen from './components/Vehicles';
import SessionsScreen from './components/Sessions';
import HistoryScreen from './components/History';
import AddVehicleScreen from './components/AddVehicle';
import VehicleDetailsScreen from './components/VehicleDetails';
import ActiveSessionScreen from './components/ActiveSession';
import ParkingFormScreen from './components/ParkingForm';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab
      title="Parking"
      icon={props => <Icon {...props} name="globe-2-outline" />}
    />
    <BottomNavigationTab
      title="Vehicles"
      icon={props => <Icon {...props} name="car-outline" />}
    />
    <BottomNavigationTab
      title="Sessions"
      icon={props => <Icon {...props} name="pin-outline" />}
    />
    <BottomNavigationTab
      title="History"
      icon={props => <Icon {...props} name="clock-outline" />}
    />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator
    tabBar={props => <BottomTabBar {...props} />}
    screenOptions={{ headerShown: false }}>
    <Screen name="Parking" component={ParkingScreen} />
    <Screen name="Vehicles" component={VehiclesScreen} />
    <Screen name="Sessions" component={SessionsScreen} />
    <Screen name="History" component={HistoryScreen} />
    <Screen name="AddVehicle" component={AddVehicleScreen} />
    <Screen name="VehicleDetails" component={VehicleDetailsScreen} />
    <Screen name="ActiveSession" component={ActiveSessionScreen} />
    <Screen name="ParkingForm" component={ParkingFormScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
