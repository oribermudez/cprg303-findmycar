import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon, // Import the Icon component
} from '@ui-kitten/components';
import ParkingScreen from './components/parking/Parking';
import VehiclesScreen from './components/vehicles/Vehicles';
import SessionsScreen from './components/sessions/Sessions';
import HistoryScreen from './components/history/History';
import AddVehicleScreen from './components/vehicles/AddVehicle';
import VehicleDetailsScreen from './components/vehicles/VehicleDetails';
import ActiveSessionScreen from './components/sessions/ActiveSession';
import ParkingFormScreen from './components/parking/ParkingForm';

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
