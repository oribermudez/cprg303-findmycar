import React, { createContext, useContext, useState } from 'react';
import vehicleData from './VehicleData';

const VehicleContext = createContext();

const initialLocation = {
  latitude: 51.0276233,
  longitude: -114.087835,
  latitudeDelta: 0.02,
  longitudeDelta: 0.02,
};

export function VehicleProvider({ children }) {
  const [vehicles, setVehicles] = useState(vehicleData);
  const [location, setLocation] = useState(initialLocation);

  return (
    <VehicleContext.Provider
      value={{ vehicles, setVehicles, location, setLocation }}>
      {children}
    </VehicleContext.Provider>
  );
}

export function useVehicleContext() {
  return useContext(VehicleContext);
}
