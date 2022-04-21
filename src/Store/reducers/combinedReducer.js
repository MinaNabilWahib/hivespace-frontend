import { combineReducers } from "redux";
import authorizationReducer from "./user";
import loadingReducer from './loading';

export default combineReducers({
    authorization: authorizationReducer,
    loading: loadingReducer
})