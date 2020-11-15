import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import DrawerRoutes from './src/Routes/drawerRouter';

import Routes from './src/Routes/routes';
import AppSecurity from './src/pages/DrawerPages/AppSecurity';

const fetchFonts = () => {
  return Font.loadAsync({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <>
    {/* <Routes /> */}
    <AppSecurity />
    {/* <DrawerRoutes /> */}
      <StatusBar style="light" />
    </>
  );
}