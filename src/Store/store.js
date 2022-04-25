import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import combinedReducer from "./reducers/combinedReducer";

export const store = createStore(
	combinedReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
