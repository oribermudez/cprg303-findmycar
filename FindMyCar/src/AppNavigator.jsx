import React from 'react';
import { NavigationContainer, sta } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import ParkingScreen from './screens/Parking';
import VehiclesScreen from './screens/Vehicles';
import AddVehicleScreen from './screens/AddVehicle';
import VehicleDetailsScreen from './screens/VehicleDetails';
import ActiveSessionScreen from './screens/ActiveSession';
import ParkingFormScreen from './screens/ParkingForm';

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
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator
    tabBar={props => <BottomTabBar {...props} />}
    screenOptions={{ headerShown: false }}>
    <Screen name="Parking" component={ParkingScreen} />
    <Screen name="Vehicles" component={VehiclesScreen} />
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
