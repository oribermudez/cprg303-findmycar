import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './src/AppNavigator';
import { default as theme } from './src/custom-theme.json';
import { VehicleProvider } from './src/VehicleContext';

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
