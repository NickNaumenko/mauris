import React from 'react';
import {ImageBackground} from 'react-native';
import styles from './styles';

const Headers = () => (
  <ImageBackground
    source={require('../../assets/img/header.png')}
    style={styles.backgroundImage}
  />
);

export default Headers;
