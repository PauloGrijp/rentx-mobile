import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';
import {
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';

import { ThemeProvider } from 'styled-components';
import { Home } from './src/screens/Home';
import { CarDetails } from './src/screens/CarDetails';
import theme from './src/styles/theme';
import { Sheduling } from './src/screens/Sheduling';
import { ShudulingDetails } from './src/screens/ShudulingDetails';

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <ShudulingDetails />
    </ThemeProvider>
  );
}
