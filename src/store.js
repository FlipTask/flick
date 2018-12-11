import { createStore,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers"; // Gets the State from the reducer(s)
import {axiosInstance} from "./Api";
import {LOGIN_SUCCESS} from "./constants/ActionTypes";
import {login} from "./actions/authActions";
import {setDataForUser} from "./actions/api";
const composeEnhancer = compose(
    applyMiddleware(thunk.withExtraArgument(axiosInstance)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
let store = createStore(
    reducer,//reducers
    {},
    composeEnhancer
); // Creates the store from the State received from the reducer(s)


const setLoginCredentialsInLocalStorage = () => {
    const db = localStorage.getItem("innov-login-db");
    if(!db){
        const users = {
            "testuser1" : "password1",
            "testuser2" : "password2",
            "loggedin_user" : null,
            "watchlist" : {}
        };
        localStorage.setItem("innov-login-db" , JSON.stringify(users));
    }else{
        const dbs = JSON.parse(db);
        if(dbs.loggedin_user){
            // set watchlist and loggedin user
            store.dispatch(
                login(LOGIN_SUCCESS,dbs.loggedin_user)
            );
            store.dispatch(setDataForUser());
        }
    }
};
setLoginCredentialsInLocalStorage();



export default store;