import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  imageWrapper: {
    width: 135,
    height: 200,
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
  },
  season: {
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.primaryColor,
  },
});
