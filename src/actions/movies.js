import { API_BASE } from '../config/evn';
import axios from 'axios';

export function fetchMovies() {
    return dispatch => {
        dispatch({
            type: 'FETCH_MOVIES',
            payload: axios.get(`${API_BASE}/movies`)
                         .then(result => result.data.movies)
        })
    }
}

export function onDeleteMoviesSubmit(id) {
    return dispatch => {
        dispatch({
            type: 'DELETE_MOVIE',
            payload: axios.delete(`${API_BASE}/movies/${id}`)
            .then(result => Object.assign({}, result, {id}))
        })
    }
}