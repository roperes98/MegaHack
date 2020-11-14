import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import BusinessData from '../pages/MainPages/BusinessData';
import BusinessHealth from '../pages/MainPages/BusinessHealth';
import Overview from '../pages/MainPages/Overview';

import colors from '../pages/styles/colors';

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => (         
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Overview"
            tabBarOptions={{
                style: {
                    height: 61,
                    backgroundColor: colors.tabBackground,
                    borderTopWidth: 1.5,
                    borderTopColor: colors.background
                },
                tabStyle: {
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                showLabel : false,
                activeTintColor: 'white',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="BusinessData" component={BusinessData} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <MaterialIcons 
                            name="donut-small"
                            size={35}
                            color={focused ? 'white' : 'gray'}
                        />
                    )
                }
            }} />
            <Tab.Screen name="Overview" component={Overview} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <MaterialIcons 
                            name="attach-money"
                            size={35}
                            color={focused ? 'white' : 'gray'}
                            top={50}
                        />
                    )
                }
            }} />
            <Tab.Screen name="BusinessHealth" component={BusinessHealth}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <MaterialIcons 
                            name="account-balance-wallet"
                            size={35}
                            color={focused ? 'white' : 'gray'}
                        />
                    )
                }
            }} />
        </Tab.Navigator>
    </NavigationContainer>
);
  

export default Routes;