import React from 'react';
import {Calendar} from 'react-native-calendars';

const MoviesCalendar = ({onDayPress}) => (
  <Calendar onDayPress={onDayPress} monthFormat={'MMMM'} hideDayNames={true} />
);

export default MoviesCalendar;
