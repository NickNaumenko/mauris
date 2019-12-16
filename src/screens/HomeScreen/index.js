import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import MoviesCalendar from '../../components/MoviesCalendar';
import BaseText from '../../components/BaseText';
import styles from './styles';

const HomeScreen = props => {
  const {
    navigation: {navigate},
  } = props;

  const onDayPress = ({dateString}) => {
    navigate('Movies', {date: dateString});
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.container}>
        <View style={styles.tvWrapper}>
          <Image
            style={styles.tv}
            resizeMode="contain"
            source={require('../../assets/img/tv.png')}
          />
        </View>
        <Text style={styles.text}>
          <BaseText>
            Для получения списка сериалов, пожалуйста, выберите необходимый
            месяц и день.
          </BaseText>
        </Text>
        <View style={styles.calendar}>
          <MoviesCalendar onDayPress={onDayPress} />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
