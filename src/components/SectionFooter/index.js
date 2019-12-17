import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import BaseText from '../BaseText';
import styles from './styles';
import Down from '../../assets/img/down.svg';
import Up from '../../assets/img/up.svg';

const SectionFooter = ({onPress, moviesCount, isOpen}) => {
  const text = isOpen ? (
    <Text>
      Показать основные <Up height={10} />
    </Text>
  ) : (
    <Text>
      {`Еще ${moviesCount} сериалов `} <Down height={10} />
    </Text>
  );

  return (
    <TouchableOpacity onPress={onPress} style={styles.footer}>
      <View style={styles.button}>
        <BaseText>{text}</BaseText>
      </View>
    </TouchableOpacity>
  );
};

export default SectionFooter;
