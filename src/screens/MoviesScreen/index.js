import React from 'react';
import {View, Text, SectionList, ActivityIndicator} from 'react-native';
import MovieItem from '../../components/MovieItem';
import SectionFooter from '../../components/SectionFooter';
import moment from 'moment';
import * as moviesService from '../../services/moviesService';
import styles from './styles';
import BaseText from '../../components/BaseText';

const SHOWN_ITEMS = 2;

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
  };

  renderItem = ({item, index, section: {isOpen}}) => {
    return index < SHOWN_ITEMS || isOpen ? <MovieItem movie={item} /> : null;
  };

  renderSectionHeader = ({section}) => (
    <View style={styles.sectionHeader}>
      <BaseText>
        <Text style={styles.sectionHeaderText}>
          {moment(section.title).format('DD MMMM YYYY')}
        </Text>
      </BaseText>
    </View>
  );

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
    <View style={styles.footerLoader}>
      <ActivityIndicator animating size="large" />
    </View>
  );

  render() {
    const {isLoading, data} = this.state;
    if (isLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View>
        <SectionList
          sections={data}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          renderSectionFooter={this.renderSectionFooter}
          keyExtractor={item => item.id}
          ListFooterComponent={this.renderFooter}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.5}
        />
      </View>
    );
  }
}

export default MoviesScreen;
