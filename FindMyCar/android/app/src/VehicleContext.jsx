import React, { createContext, useContext, useState } from 'react';
import vehicleData from './VehicleData';

const VehicleContext = createContext();

export function VehicleProvider({ children }) {
  const [vehicles, setVehicles] = useState(vehicleData);

  return (
    <VehicleContext.Provider value={{ vehicles, setVehicles }}>
      {children}
    </VehicleContext.Provider>
  );
}

export function useVehicleContext() {
  return useContext(VehicleContext);
}
