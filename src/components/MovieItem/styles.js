import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    padding: 15,
  },
  imageWrapper: {
    width: 100,
    height: 148,
    marginRight: 20,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#8f6b9e',
    elevation: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  description: {
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  title: {
    fontSize: 20,
  },
  small: {
    fontSize: 16,
    lineHeight: 25,
    color: '#b4b4b4',
  },
  season: {
    alignSelf: 'flex-start',
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.primaryColor,
  },
  current: {
    fontSize: 16,
    color: colors.fontColorLight,
  },
});
