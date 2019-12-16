import {colors} from '../../styles/colors';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default {
  arrowColor: 'red',
  'stylesheet.calendar.main': {
    container: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    monthView: {
      marginRight: -2,
      marginLeft: -2,
    },
    week: {
      marginTop: -2,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  'stylesheet.calendar.header': {
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 6,
      alignItems: 'center',
      backgroundColor: colors.primaryColor,
    },
  },
  'stylesheet.day.basic': {
    base: {
      width: width / 7 + 1,
      height: width / 7 + 1,
      borderColor: colors.lightGrey,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    today: {
      position: 'relative',
      zIndex: 1,
      borderRadius: 0,
      borderWidth: 2,
      borderColor: colors.selectedColor,
    },
    todayText: {
      color: colors.fontColor,
      fontWeight: 'bold',
    },
  },
};
