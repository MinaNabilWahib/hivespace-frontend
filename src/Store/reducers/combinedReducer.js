import { combineReducers } from "redux";
import { userReducer } from "./user";
import { workspaceReducer } from "./workspace";

export default combineReducers({
	workspace: workspaceReducer,
	user: userReducer,
});
