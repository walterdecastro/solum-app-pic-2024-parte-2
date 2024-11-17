import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Profile from './src/pages/Profile';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={ Home }
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Login" 
          component={ Login }
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ Profile }
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}