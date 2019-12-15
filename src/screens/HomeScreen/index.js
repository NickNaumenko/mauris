import React from 'react';
import {View, Image, Text} from 'react-native';
import MoviesCalendar from '../../components/MoviesCalendar';

const HomeScreen = props => {
  const {
    navigation: {navigate},
  } = props;

  const onDayPress = ({dateString}) => {
    navigate('Movies', {date: dateString});
  };

  return (
    <View>
      <Image source={require('../../assets/img/tv.png')} />
      <Text>
        Для получения списка сериалов, пожалуйста, выберите необходимый месяц и
        день.
      </Text>
      <MoviesCalendar onDayPress={onDayPress} />
    </View>
  );
};

export default HomeScreen;
