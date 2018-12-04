import React from 'react';
import PropTypes from 'prop-types';
import MoviesCard from './MoviesCard';
import { Grid } from 'semantic-ui-react';
import { ClipLoader } from 'react-spinners';

const MoviesList = ({ movies, onDeleteMoviesSubmit }) => {

    const emptyMessage = (
        <p>There are no movies yet</p>
    );

    const moviesList = (
        <div>

            <ClipLoader
                sizeUnit={"px"}
                size={40}
                color={'#35bcb2'}
                loading={movies.fetching}
            />

            { 
                movies.error.response ? 
                    <h3>ERROR date</h3> : 
                    <Grid stackable columns={3}>
                        { movies.movies.map(movie => 
                        <MoviesCard  
                            onDeleteMoviesSubmit={onDeleteMoviesSubmit}
                            key={movie._id} 
                            movies={movie} />) }
                    </Grid>
            }
        </div>
    );

    return (
      <div>
        { movies.length === 0 ? emptyMessage : moviesList }
      </div>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.shape({
        movies: PropTypes.array.isRequired
    }).isRequired
};

export default MoviesList;
