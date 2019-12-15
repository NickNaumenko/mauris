import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import MoviesScreen from '../screens/MoviesScreen';

import { View, Text } from 'react-native';
import React from 'react';

const Header = () => <View><Text>Header</Text></View>;

export default createStackNavigator(
  {
    Home: HomeScreen,
    Movies: MoviesScreen,
  },
);
