import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const BaseText = ({children, ...rest}) => (
  <Text style={styles.text} {...rest}>
    {children}
  </Text>
);

export default BaseText;
