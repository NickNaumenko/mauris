import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export default StyleSheet.create({
  loader: {
    height: '100%',
    justifyContent: 'center',
  },
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
  footerLoader: {
    paddingBottom: 20,
  },
});
