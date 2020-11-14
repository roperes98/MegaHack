
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import DrawerRoutes from './src/Routes/drawerRouter';

import Routes from './src/Routes/routes';

export default function App() {
  return (
    <>
    <Routes />
    {/* <DrawerRoutes /> */}
      <StatusBar style="light" />
    </>
  );
}