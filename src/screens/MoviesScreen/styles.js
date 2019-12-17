import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export default StyleSheet.create({
  sectionHeader: {
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  sectionHeaderText: {
    color: colors.fontColor,
    fontWeight: 'bold',
  },
});
