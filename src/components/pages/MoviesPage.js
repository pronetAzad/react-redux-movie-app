import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchMovies, onDeleteMoviesSubmit } from '../../actions/movies';
import MoviesList from '../MoviesList';

class MoviesPage extends Component {

  static propTypes = {
    movies: PropTypes.object.isRequired
  }

  componentDidMount = () => {
    this.props.fetchMovies();
  };
  

  render() {
    return (
      <div>
        <h2>Movies Page</h2>
        <MoviesList 
           onDeleteMoviesSubmit={this.props.onDeleteMoviesSubmit}
           movies={this.props.movies} />
      </div>
    )
  }
}

const mapStateToProps = ({ movies }) => {
  return {
    movies
  }
};

const mapDispatchToProps = {
    fetchMovies,
    onDeleteMoviesSubmit
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
