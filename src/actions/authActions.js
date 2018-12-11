import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGOUT,
} from "./../constants/ActionTypes";

export const login = (type,payload) => {
    return {
        type,
        payload
    };
};

export const logout = (payload) => {
    return {
        type : LOGOUT
    }
}