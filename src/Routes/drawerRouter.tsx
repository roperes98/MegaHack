import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Notifications from '../pages/DrawerPages/Notifications';
import Account from '../pages/DrawerPages/Account';
import LinkerNews from '../pages/DrawerPages/LinkerNews';
import AppSecurity from '../pages/DrawerPages/AppSecurity';
import Help from '../pages/DrawerPages/Help';
import Overview from '../pages/MainPages/Overview';

const Drawer = createDrawerNavigator();

const DrawerRoutes: React.FC = () => (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Notificações" component={Notifications} />
        <Drawer.Screen name="Minha conta" component={Account} />
        <Drawer.Screen name="Linker News" component={LinkerNews} />
        <Drawer.Screen name="Segurança" component={AppSecurity} />
        <Drawer.Screen name="Me ajuda" component={Help} />
      </Drawer.Navigator>
    </NavigationContainer>
);

export default DrawerRoutes;
