import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black
} from '@expo-google-fonts/roboto';

import theme from './src/global/styles';
import AppRoutes from './src/routes/app.routes';

export default function App() {

  const [ appReady, setAppReady ] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        
        await SplashScreen.preventAutoHideAsync();
      } catch (error) {
        
        console.warn(error);
      } finally {
        
        setAppReady(true);
      }
    }

    prepare();
  }, []);

  const RootLayoutAppReady = useCallback( async () => {
    if (appReady) await SplashScreen.hideAsync();
  }, [appReady]);

  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black
  });

  if (!appReady || !fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar hidden/>
      <AppRoutes />
    </ThemeProvider>
  );
}
