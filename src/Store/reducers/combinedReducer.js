import { combineReducers } from "redux";
import authorizationReducer from "./user";
import loadingReducer from './loading';
import { workspaceReducer } from "./workspace";

export default combineReducers({
  workspace: workspaceReducer,
    authorization: authorizationReducer,
    loading: loadingReducer
})
