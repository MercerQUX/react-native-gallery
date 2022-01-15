import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MainPage} from '../components/MainPage';
import {FullPhoto} from '../components/FullPhoto';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FullImg"
          component={FullPhoto}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
