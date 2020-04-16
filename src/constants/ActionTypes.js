// ActionTypes are defined in constants.

// They are imported in Actions and Reducers.
// This prevents errors if they are misspelled over here.

/* eslint-disable */

export const LOGIN_INIT = "LOGIN-INIT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const RESET = "RESET";
export const TRENDING_MOVIES_FETCH_SUCCESS = "TRENDING_MOVIES_FETCH_SUCCESS";
export const TRENDING_MOVIES_FETCH_FAILURE = "TRENDING_MOVIES_FETCH_FAILURE";
export const TOP_RATED_MOVIES_FETCH_SUCCESS = "TOP_RATED_MOVIES_FETCH_SUCCESS";
export const TOP_RATED_MOVIES_FETCH_FAILURE = "TOP_RATED_MOVIES_FETCH_FAILURE";
export const MOVIE_BY_ID_FETCH_SUCCESS = "MOVIE_BY_ID_FETCH_SUCCESS";
export const MOVIE_BY_ID_FETCH_FAILURE = "MOVIE_BY_ID_FETCH_FAILURE";
export const TOGGLE_WATCH_LIST = "TOGGLE_WATCH_LIST";
export const SET_WATCH_LIST = "SET_WATCH_LIST";
export const LOGOUT = "LOGOUT";
export const LATEST_MOVIES_FETCH_SUCCESS = "LATEST_MOVIES_FETCH_SUCCESS";
export const LATEST_MOVIES_FETCH_FAILURE = "LATEST_MOVIES_FETCH_FAILURE";
/* eslint-enable */
