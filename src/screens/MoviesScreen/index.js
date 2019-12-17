import React, {useState, useEffect} from 'react';
import {View, Text, SectionList, ActivityIndicator, TouchableOpacity} from 'react-native';
import MovieItem from '../../components/MovieItem';
import SectionFooter from '../../components/SectionFooter';
import moment from 'moment';
import * as moviesService from '../../services/moviesService';

const SHOWN_ITEMS = 4;

class MoviesScreen extends React.Component {
  constructor(props) {
    super(props);
    const {navigation} = this.props;
    const date = navigation.getParam('date');

    this.state = {
      isLoading: true,
      date,
      data: [],
    };
  }

  componentDidMount() {
    const {date} = this.state;
    this.fetchMovies(date);
  }

  async fetchMovies(date) {
    const movies = await moviesService.getMovies(date);

    this.setState({
      data: [...this.state.data, {title: date, data: movies, isOpen: false}],
      isLoading: false,
    });
  }

  handleLoadMore = () => {
    const {date} = this.state;
    const newDate = moment(date)
      .subtract(1, 'days')
      .format('YYYY-MM-DD');
    this.setState({date: newDate});

    this.fetchMovies(newDate);
    console.log({date, newDate});
  };

  renderItem = ({item, index, section: {isOpen}}) => {
    return index < SHOWN_ITEMS || isOpen ? <MovieItem movie={item} /> : null;
  };

  renderSectionFooter = ({section}) => {
    const moviesCount = section.data.length - SHOWN_ITEMS;
    return (
      <SectionFooter
        onPress={() => this.toggleSection(section)}
        moviesCount={moviesCount}
        isOpen={section.isOpen}
      />
    );
  };

  toggleSection = section => {
    section.isOpen = !section.isOpen;

    const sections = this.state.data;
    const updatedSections = sections.map(item => {
      return item.title === section.title ? section : item;
    });

    this.setState({
      data: updatedSections,
    });
  };

  renderFooter = () => (
    <View>
      <ActivityIndicator animating size="large" />
    </View>
  );

  render() {
    const {isLoading, data} = this.state;
    if (isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View>
        <SectionList
          sections={data}
          renderItem={this.renderItem}
          renderSectionHeader={({section}) => <Text>{section.title}</Text>}
          renderSectionFooter={this.renderSectionFooter}
          keyExtractor={item => item.id}
          ListFooterComponent={this.renderFooter}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}

export default MoviesScreen;
