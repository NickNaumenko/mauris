import React, {useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import MovieItem from '../../components/MovieItem';
import * as moviesService from '../../services/moviesService';

const MoviesScreen = props => {
  const {navigation} = props;
  const date = navigation.getParam('date');
  const [movies, setMovies] = useState();

  useEffect(() => {
    moviesService.getMovies(date).then(data => setMovies(data));
  }, [date]);

  if (!movies) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>Movies Screen</Text>
      <FlatList
        data={movies}
        renderItem={({item}) => <MovieItem movie={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MoviesScreen;
