import { FETCH_ALL_MOVIE_REQUEST, FETCH_ALL_MOVIE_SUCCESS } from "./constant";

const initialState = {
    listMovie: [],
    loading: true,
    error: ' ',
}
const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_ALL_MOVIE_REQUEST:
            return { ...state, loading: true };
        case FETCH_ALL_MOVIE_SUCCESS:
            return { ...state, listMovie: payload, loading: false };
        case FETCH_ALL_MOVIE_REQUEST:
            return { ...state, error: payload,loading: false };

        default:
            return state
    }
}
export default movieReducer;