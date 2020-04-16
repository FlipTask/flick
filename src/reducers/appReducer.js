import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    TOP_RATED_MOVIES_FETCH_FAILURE,
    TOP_RATED_MOVIES_FETCH_SUCCESS,
    TRENDING_MOVIES_FETCH_FAILURE,
    TRENDING_MOVIES_FETCH_SUCCESS,
    MOVIE_BY_ID_FETCH_FAILURE,
    MOVIE_BY_ID_FETCH_SUCCESS,
    TOGGLE_WATCH_LIST,
    SET_WATCH_LIST,
    LOGOUT,
    LATEST_MOVIES_FETCH_FAILURE,
    LATEST_MOVIES_FETCH_SUCCESS
} from "./../constants/ActionTypes";

const initialState = {
    isAuthorised : true,
    username : null,
    watchlist : [],
    watchlist_movies : [],
    movie : {
        error : false,
        msg : "",
        data : {}
    },
    movies : {
        trending : {
            top : [],
            error : false,
            msg : "",
            list : [],
        },
        top_rated : {
            top : [],
            error : false,
            msg : "",
            list : []
        },
        latest : {
            top : [],
            error : false,
            msg : "",
            list : []
        }
    }
};

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_SUCCESS:
            return Object.assign({},state,{
                isAuthorised : true,
                username : action.payload,
            });
        case LOGIN_FAILED:
            return Object.assign({},state,{
                isAuthorised : false,
            });
        case TOP_RATED_MOVIES_FETCH_SUCCESS:
            return Object.assign({},state,{
                ...state,
                movies : {
                    ...state.movies,
                    top_rated : {
                        error : false,
                        msg : "",
                        list : [
                            ...state.movies.top_rated.list,
                            ...action.payload
                        ],
                        top : action.payload.filter((m,i) => i < 10)
                    }
                }
            });
        case TOP_RATED_MOVIES_FETCH_FAILURE:
            return Object.assign({},state,{
                ...state,
                movies : {
                    ...state.movies,
                    top_rated : {
                        ...state.movies.top_rated,
                        error : true,
                        msg : action.payload,
                    }
                }
            });
        case TRENDING_MOVIES_FETCH_SUCCESS:
            return Object.assign({},state,{
                ...state,
                movies : {
                    ...state.movies,
                    trending : {
                        error : false,
                        msg : "",
                        list : [
                            ...state.movies.trending.list,
                            ...action.payload
                        ],
                        top : action.payload.filter((m,i) => i < 10)
                    }
                }
            });
        case TRENDING_MOVIES_FETCH_FAILURE:
            return Object.assign({},state,{
                ...state,
                movies : {
                    ...state.movies,
                    trending : {
                        ...state.movies.trending,
                        error : true,
                        msg : action.payload,
                    }
                }
            });
        case MOVIE_BY_ID_FETCH_SUCCESS:
            return Object.assign({},state,{
                ...state,
                movie : {
                    error : false,
                    msg : "",
                    data : action.payload,
                }
            });
        case MOVIE_BY_ID_FETCH_FAILURE:
            return Object.assign({},state,{
                ...state,
                movie : {
                    ...state.movie,
                    error : true,
                    msg : action.payload,
                }
            });
        case TOGGLE_WATCH_LIST:
            if(state.watchlist.indexOf(action.payload.id) > -1){ //exists in watchlist so remove
                const newState = Object.assign({},state,{
                    watchlist : state.watchlist.filter((id) => id !== action.payload.id),
                    watchlist_movies : state.watchlist_movies.filter((mov) => mov.id!== action.payload.id),
                });
                setWatchListInLocalStorage(state.username,{
                    watchlist : newState.watchlist,
                    watchlist_movies : newState.watchlist_movies
                });
                return newState;
            }else{ // add in watch list
                const newState = Object.assign({},state,{
                    watchlist : [
                        ...state.watchlist,
                        action.payload.id
                    ],
                    watchlist_movies:[
                        ...state.watchlist_movies,
                        action.payload
                    ]
                });
                setWatchListInLocalStorage(state.username,{
                    watchlist : newState.watchlist,
                    watchlist_movies : newState.watchlist_movies
                });
                return newState;
            }
        case SET_WATCH_LIST:
            const newState = Object.assign({},state,{
                ...state,
                watchlist: action.payload.watchlist.watchlist || [],
                watchlist_movies : action.payload.watchlist.watchlist_movies|| [],
            });
            setWatchListInLocalStorage(state.username,{
                watchlist : newState.watchlist,
                watchlist_movies : newState.watchlist_movies
            });
            return newState;
        case LOGOUT: 
            return Object.assign({},state,{
                ...state,
                isAuthorised :false,
                username : null
            });
        case LATEST_MOVIES_FETCH_SUCCESS:
            return Object.assign({},state,{
                ...state,
                movies : {
                    ...state.movies,
                    latest : {
                        error : false,
                        msg : "",
                        list : [
                            ...state.movies.latest.list,
                            ...action.payload
                        ],
                        top : action.payload.filter((m,i) => i < 10)
                    }
                }
            });
        case LATEST_MOVIES_FETCH_FAILURE:
            return Object.assign({},state,{
                ...state,
                movies : {
                    ...state.movies,
                    trending : {
                        ...state.movies.latest,
                        error : true,
                        msg : action.payload,
                    }
                }
            });
        default:
            return state;
    }
};


const setWatchListInLocalStorage = (user,watchlist) => {
    if(user){
        const db = JSON.parse(localStorage.getItem("innov-login-db"));
        db.watchlist[user] = watchlist;
        localStorage.setItem("innov-login-db",JSON.stringify(db));
    }
}