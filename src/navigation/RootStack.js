import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import MoviesScreen from '../screens/MoviesScreen';
import Header from '../components/Header';
import Back from '../assets/img/back.svg';

const BackTitle = () => <Back height={20} />;

export default createStackNavigator(
  {
    Home: HomeScreen,
    Movies: MoviesScreen,
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerBackground: Header,
      title: 'SUPER FILM',
      headerLayoutPreset: 'center',
      headerBackImage: BackTitle,
    },
  },
);
