import React, { createContext, useContext, useState } from 'react';
import vehicleData from './VehicleData';

const VehicleContext = createContext();

export function VehicleProvider({ children }) {
  const [vehicles, setVehicles] = useState(vehicleData);
  const [activeSession, setActiveSession] = useState({});

  return (
    <VehicleContext.Provider value={{ vehicles, setVehicles, activeSession, setActiveSession}}>
      {children}
    </VehicleContext.Provider>
  );
}

export function useVehicleContext() {
  return useContext(VehicleContext);
}
