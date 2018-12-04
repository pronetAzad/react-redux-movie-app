import { combineReducers } from 'redux';

import movies from './movies';
import newMovie from './newMovies';

export default combineReducers ({
    movies,
    newMovie
});