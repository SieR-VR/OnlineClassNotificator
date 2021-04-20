import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigation from './src/components/navigation/DrawerNavigation';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';

import './NotificationConfig';

const Route = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Route.Navigator>
        <Route.Screen name="Loading.." component={SplashScreen}/>
        <Route.Screen name="Login" component={LoginScreen}/>
        <Route.Screen name="Menu" component={DrawerNavigation}/>
      </Route.Navigator>
    </NavigationContainer>
  )
}