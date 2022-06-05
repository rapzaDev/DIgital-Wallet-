import React, { useCallback, useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import * as NavigationBar from 'expo-navigation-bar';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black
} from '@expo-google-fonts/roboto';

import theme from './src/global/styles';
import AppRoutes from './src/routes/app.routes';

export default function App() {

  const visibility = NavigationBar.useVisibility();

    useEffect(() => {
        async function setStatusBarVisibility() {
            await NavigationBar.setBehaviorAsync('overlay-swipe');
            await NavigationBar.setVisibilityAsync('hidden');
        } 

        setStatusBarVisibility();
    },[visibility])

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
