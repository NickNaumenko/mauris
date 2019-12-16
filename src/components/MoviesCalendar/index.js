import React from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import theme from './theme';

LocaleConfig.locales.ru = {
  monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
};
LocaleConfig.defaultLocale = 'ru';

const MoviesCalendar = ({onDayPress}) => {
  return (
    <Calendar
      onDayPress={onDayPress}
      monthFormat={'MMMM'}
      hideDayNames={true}
      theme={theme}
    />
  );
};

export default MoviesCalendar;
