import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const BaseText = ({children}) => <Text style={styles.text}>{children}</Text>;

export default BaseText;
