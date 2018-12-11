// This will can combine one or more Reducer functions and export it through Redux's combineReducer helper.
import { combineReducers } from "redux";
import appReducer from "./appReducer";

export default combineReducers({ 
    app : appReducer,
});

// Example for combining multiple reducers:
// export default combineReducers({ count, secondCounter });
