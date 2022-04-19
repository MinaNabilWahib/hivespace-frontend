import { combineReducers } from "redux";
import { workspaceReducer } from "./workspace";

export default combineReducers({
	workspace: workspaceReducer,
});
