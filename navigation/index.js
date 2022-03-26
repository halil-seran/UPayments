import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from "../screens/HomeScreen";
import { DetailScreen } from "../screens/DetailScreen";
import { CreateScreen } from "../screens/CreateScreen";


const Stack = createNativeStackNavigator();

const createScreenOptions = () => {
  return {
    headerShown: false,
  };
};


export const Navigation = ({route}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={createScreenOptions}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} route={route}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen} route={route}/>
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
