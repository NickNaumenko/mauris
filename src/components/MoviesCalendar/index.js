import React from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import theme from './theme';
import NextArrow from '../../assets/img/next.svg';
import PrevArrow from '../../assets/img/prev.svg';

LocaleConfig.locales.ru = {
  monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
};
LocaleConfig.defaultLocale = 'ru';

const MoviesCalendar = ({onDayPress}) => {
  const renderArrow = direction => {
    return direction === 'left' ? (
      <PrevArrow width={10} />
    ) : (
      <NextArrow width={10} />
    );
  };

  return (
    <Calendar
      onDayPress={onDayPress}
      monthFormat={'MMMM'}
      hideDayNames={true}
      theme={theme}
      renderArrow={renderArrow}
    />
  );
};

export default MoviesCalendar;
