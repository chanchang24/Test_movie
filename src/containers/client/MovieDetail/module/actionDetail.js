import movieApi from "apis/movieApi";
import { FETCH_MOVIE_DETAIL_FAIL, FETCH_MOVIE_DETAIL_REQUEST, FETCH_MOVIE_DETAIL_SUCCESS } from "./constantDetail";

const actFetchMovieDetailRequest = () => ({
    type: FETCH_MOVIE_DETAIL_REQUEST,
});

const actFetchMovieDetailSuccess = listMovie => ({
    type: FETCH_MOVIE_DETAIL_SUCCESS,
    payload: listMovie,
});

const actFetchMovieDetailFail = error => ({
    type: FETCH_MOVIE_DETAIL_FAIL,
    payload: error,
});

// res có thuộc tính data, bóc tách data
export const actFetchMovieDetail = movieId => {
    return async dispatch => {
        dispatch(actFetchMovieDetailRequest());
        try{
            const { data } = await movieApi.fetchMovieDetailApi(movieId);
            dispatch(actFetchMovieDetailSuccess(data.content));
        }catch(error){
            dispatch(actFetchMovieDetailFail(error));
        }
        
    }
}