import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import BaseText from '../BaseText';
import styles from './styles';

const SectionFooter = ({onPress, moviesCount, isOpen}) => {
  const text = isOpen ? 'Показать основные' : `Еще ${moviesCount} сериалов`;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <BaseText>
          <Text style={styles.text}>{text}</Text>
        </BaseText>
      </View>
    </TouchableOpacity>
  );
};

export default SectionFooter;
