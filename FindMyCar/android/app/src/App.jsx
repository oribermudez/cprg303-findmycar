import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './AppNavigator';
import { default as theme } from './custom-theme.json';
import { VehicleProvider } from './VehicleContext';
import Geocoding from 'react-native-geocoding';

Geocoding.init(process.env.GOOGLE_MAPS_API_KEY);

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <VehicleProvider>
        <AppNavigator />
      </VehicleProvider>
    </ApplicationProvider>
  </>
);
