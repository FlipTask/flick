import {
    TOP_RATED_MOVIES_FETCH_SUCCESS,
    TRENDING_MOVIES_FETCH_SUCCESS,
    TOP_RATED_MOVIES_FETCH_FAILURE,
    TRENDING_MOVIES_FETCH_FAILURE,
    MOVIE_BY_ID_FETCH_SUCCESS,
    MOVIE_BY_ID_FETCH_FAILURE,
    TOGGLE_WATCH_LIST,
    SET_WATCH_LIST,
    LATEST_MOVIES_FETCH_FAILURE,
    LATEST_MOVIES_FETCH_SUCCESS
} from "./../constants/ActionTypes";

export const setTopRatedMovies = (payload) => {
    return{
        type : TOP_RATED_MOVIES_FETCH_SUCCESS,
        payload
    };
};

export const topRatedMoviesFailure = () => {
    return {
        type : TOP_RATED_MOVIES_FETCH_FAILURE,
        payload : "Something went wrong !"
    };
};

export const setTrendingMovies = (payload) => {
    return {
        type : TRENDING_MOVIES_FETCH_SUCCESS,
        payload
    };
};

export const setLatestMovies = (payload) => {
    return {
        type: LATEST_MOVIES_FETCH_SUCCESS,
        payload
    }    
}

export const latestMoviesFailure = () => {
    return {
        type: LATEST_MOVIES_FETCH_FAILURE,
        payload : "Something went wrong !"
    }
}
export const trendingMoviefailure = () => {
    return {
        type : TRENDING_MOVIES_FETCH_FAILURE,
        payload : "Something went wrong !"
    };
};

export const setMovie = (payload) => {
    return {
        type: MOVIE_BY_ID_FETCH_SUCCESS,
        payload
    };
};

export const setMovieFailure = () => {
    return {
        type : MOVIE_BY_ID_FETCH_FAILURE,
        payload : "Something went wrong. Please refresh this page !"
    };
};

export const toggleWatchList = (payload) => {
    return {
        type : TOGGLE_WATCH_LIST,
        payload
    };
};

export const setWatchList = (payload) => {
    return {
        type : SET_WATCH_LIST,
        payload
    };
};