import React from 'react';
import {View, Image, Text} from 'react-native';
import MoviesCalendar from '../../components/MoviesCalendar';
import styles from './styles';

const HomeScreen = props => {
  const {
    navigation: {navigate},
  } = props;

  const onDayPress = ({dateString}) => {
    navigate('Movies', {date: dateString});
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/img/tv.png')} />
      <Text>
        Для получения списка сериалов, пожалуйста, выберите необходимый месяц и
        день.
      </Text>
      <View style={styles.calendar}>
        <MoviesCalendar onDayPress={onDayPress} />
      </View>
    </View>
  );
};

export default HomeScreen;
