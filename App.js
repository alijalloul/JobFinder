import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnBoarding from './screens/OnBoarding.js';
import Home from "./screens/Home.js"
import Profile from './screens/Profile.js';

import LeftScreenHeaderBtn from './components/LeftScreenHeaderBtn.js';
import RightScreenHeaderBtn from './components/RightScreenHeaderBtn.js';

import {icons, images} from "./constants"
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value
  } catch(e) {
    // error reading value
  }
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name="OnBoarding"
          component={OnBoarding}
          options={{
            headerTitle: "",
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen 
          name="Profile"
          component={Profile}
          options={{
            headerTitle: ""
          }}
        />
        
        <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShadowVisible: false,
                headerLeft: () => (
                  <LeftScreenHeaderBtn iconurl={icons.menu}/>
                ),
                headerRight: () => (
                  <RightScreenHeaderBtn iconurl={images.guest} />
                ),
                headerTitle: ""
              }}
          />

        
        {/* <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShadowVisible: false,
              headerLeft: () => (
                <LeftScreenHeaderBtn iconurl={icons.menu}/>
              ),
              headerRight: () => (
                <RightScreenHeaderBtn iconurl={images.guest} />
              ),
              headerTitle: ""
            }}
        />
          */}
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;