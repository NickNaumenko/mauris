import React from 'react';
import {View, Text, Image} from 'react-native';
import BaseText from '../BaseText';
import Lightbox from 'react-native-lightbox';

import styles from './styles';

const MovieItem = ({movie}) => {
  const {
    number,
    season,
    show: {name, premiered, image},
  } = movie;

  return (
    <View style={styles.item}>
      <View style={styles.imageWrapper}>
        {image?.medium && (
          <Lightbox activeProps={{source: {uri: image.original}}}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{uri: image.medium}}
            />
          </Lightbox>
        )}
      </View>
      <View style={styles.description}>
        <View>
          <BaseText>
            <Text style={styles.title}>{`${name}\n`}</Text>
            <Text style={styles.small}>
              {premiered.replace(/(\d{4})(.*)/, '$1')}
            </Text>
          </BaseText>
        </View>
        <View style={styles.season}>
          <BaseText>
            <Text style={styles.current}>
              {`Сезон: ${season}  Эпизод: ${number}`}
            </Text>
          </BaseText>
        </View>
      </View>
    </View>
  );
};

export default MovieItem;
