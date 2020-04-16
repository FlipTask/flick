import {login,logout} from "./authActions";
import {
    setTopRatedMovies,
    setTrendingMovies,
    topRatedMoviesFailure,
    trendingMoviefailure,
    setMovie,
    setMovieFailure,
    setWatchList,
    setLatestMovies,
    latestMoviesFailure
} from "./movieActions";
import {axiosInstance} from "./../Api";
import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    TOP_RATED_MOVIES_FETCH_SUCCESS,
    TRENDING_MOVIES_FETCH_SUCCESS
} from "./../constants/ActionTypes";

export const submitLogin = (username,password) => async(dispatch, getState, api) => {
    const users = JSON.parse(localStorage.getItem("innov-login-db"));
    if(users.hasOwnProperty(username)){
        if(users[username] == password){
            dispatch(setAuthorization(username));
            dispatch(setDataForUser());
            dispatch(login(LOGIN_SUCCESS,username));
        }else{
            dispatch(login(LOGIN_FAILED));
        }
    }else{
        dispatch(login(LOGIN_FAILED));
    }
};

export const setDataForUser = () => async(dispatch, getState, api) => {
    const db = localStorage.getItem("innov-login-db");
    const dbs = JSON.parse(db);
    dispatch(setWatchList({
        watchlist: dbs.watchlist[dbs.loggedin_user] || {},
        username : dbs.loggedin_user
    }));
};

export const setAuthorization = (username) => async(dispatch, getState, api) => {
    const db = JSON.parse(localStorage.getItem("innov-login-db"));
    db.loggedin_user = username;
    localStorage.setItem("innov-login-db",JSON.stringify(db));
};

export const fetchTopRatedMovies = (page=1) => async(dispatch,getState,api) => {
    const res = await api.get("/movie/top_rated?language=en-US&page="+page+"&api_key=5957e53f1b383aa9112069754a87cd3f");
    if(res.data.results){
        const list = res.data.results;
        dispatch(setTopRatedMovies(list));
    }else{
        dispatch(topRatedMoviesFailure());
    }
};

export const fetchTrendingMovies = (page=1) => async(dispatch,getState,api) => {
    const res = await api.get("/trending/movie/week?language=en-US&page="+page+"1&api_key=5957e53f1b383aa9112069754a87cd3f&&include_adult=true&append_to_response=videos");
    if(res.data.results){
        const list = res.data.results;
        dispatch(setTrendingMovies(list));
    }else{
        dispatch(trendingMoviefailure());
    }
};

export const fetchMovieById = (id) => async(dispatch,getState,api) => {
    const res = await api.get("/movie/"+id+"?api_key=5957e53f1b383aa9112069754a87cd3f&language=en-US&append_to_response=videos");
    if(res.data.id){
        dispatch(setMovie(res.data));
    }else{
        dispatch(setMovieFailure());
    }
}

export const searchMovieByName = (keyword) => async(dispatch,getState,api) => {
    const res = await api.get("/search/movie?query="+keyword+"&api_key=5957e53f1b383aa9112069754a87cd3f&language=en-US&page=1&include_adult=true")
    return res.data;
} 

export const logoutUser = () => async(dispatch,getState,api) => {
    dispatch(setAuthorization(null));
    dispatch(logout());
}

export const getLatestMovies = (page=1) => async(dispatch,getState,api) => {
    const res = await api.get("/movie/upcoming?language=en-US&page="+page+"&api_key=5957e53f1b383aa9112069754a87cd3f");
    if(res.data.results){
        const list = res.data.results;
        dispatch(setLatestMovies(list));
    }else{
        dispatch(latestMoviesFailure());
    }
};