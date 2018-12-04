import { 
    NEW_MOVIE_PENDING,
    NEW_MOVIE_FULFILLED, 
    NEW_MOVIE_REJECTED,

    FETCH_MOVIE_PENDING,
    FETCH_MOVIE_FULFILLED, 
    FETCH_MOVIE_REJECTED,

    UPDATE_MOVIE_PENDING,
    UPDATE_MOVIE_FULFILLED, 
    UPDATE_MOVIE_REJECTED
} from '../config/type';

const initialState = {
    fetching: false,
    done: false,
    error: {},
    movie: {}
};

export default (state = initialState, action) => {
    switch(action.type)
    {
        case NEW_MOVIE_PENDING:
            return {
                ...state,
                fetching: true,
                done: false
            }
        case NEW_MOVIE_FULFILLED:
            return {
                ...state,
                movies: action.payload,
                fetching: false,
                done: true
            }
        case NEW_MOVIE_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            }

        //FETCH MOVIE

        case FETCH_MOVIE_PENDING:
            return {
                ...state,
                fetching: true
            };
        case FETCH_MOVIE_FULFILLED:
            return {
                ...state,
                movie: action.payload.movie,
                fetching: false
            };
        case FETCH_MOVIE_REJECTED:
            return {
                ...state,
                fetching: false
            };

        // FECTH UPDATE

        case UPDATE_MOVIE_PENDING:
            return {
                ...state,
                fetching: true,
                done: false
            }
        case UPDATE_MOVIE_FULFILLED:
            return {
                ...state,
                fetching: false,
                done: true
            }
        case UPDATE_MOVIE_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            }


        default:
            return state;
    }
}