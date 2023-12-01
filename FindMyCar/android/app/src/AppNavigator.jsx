import React from 'react';
import { NavigationContainer, sta } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
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

const Stack = createStackNavigator();

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
    <Screen name="Sessions" component={ActiveSessionScreen} />
    <Screen name="History" component={HistoryScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="AddVehicle" component={AddVehicleScreen} />
      <Stack.Screen name="VehicleDetails" component={VehicleDetailsScreen} />
      <Stack.Screen name="ActiveSession" component={ActiveSessionScreen} />
      <Stack.Screen name="ParkingForm" component={ParkingFormScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
