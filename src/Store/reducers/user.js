import { AUTHENTICATED, NOT_AUTHENTICATED } from "../actions/types";

const INITIAL_STATE = {
	authChecked: false,
	loggedIn: false,
	currentUser: {},
};

const authorizationReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AUTHENTICATED:
			return {
				authChecked: true,
				loggedIn: true,
				currentUser: action.payload,
			};
		case NOT_AUTHENTICATED:
			return {
				authChecked: true,
				loggedIn: false,
				currentUser: {}
			};
		default:
			return state;
	}
}

export default authorizationReducer;