import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreens from './screens/HomeScreens';
import AboutScreens from './screens/AboutScreens';
import DetailsScreens from './screens/DetailsScreens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreens} />
    </Stack.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} options={{headerShown:false}}/>
        <Tab.Screen name="História" component={AboutScreens} options={{headerShown:false}}/>
        <Tab.Screen name="Sobre" component={DetailsScreens} options={{headerShown:true}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
