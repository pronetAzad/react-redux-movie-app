import {API_BASE} from '../config/evn';
import axios from 'axios';

export function onNewMovieSubmit({title, cover}) {
    return dispatch => {
        dispatch({
            type: 'NEW_MOVIE',
            payload: axios.post(`${API_BASE}/movies`, {title, cover})
        })
    }
}

export function fetchMovie(id) {
    return dispatch => {
        dispatch({
            type: 'FETCH_MOVIE',
            payload: axios.get(`${API_BASE}/movies/${id}`)
            .then(result => result.data)
        })
    }
}

export function onUpdateMovieSubmit({_id, title, cover}) {
    return dispatch => {
        dispatch({
            type: 'NEW_MOVIE',
            payload: axios.put(`${API_BASE}/movies/${_id}`, {title, cover})
        })
    }
}