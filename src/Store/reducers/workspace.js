import {
	SET_OPEN_WORKSPACE,
	SET_OPEN_CHANNEL,
	GET_WORKSPACES,
	RESET_WORKSPACES,
	ADD_WORKSPACE,
} from "../actions/types";
const INITIAL_STATE = {
	workspaces: [],
	openWorkspace: "",
	openChannel: "",
};

export function workspaceReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_WORKSPACE:
			return {
				...state,
				workspaces: [...state.workspaces, action.payload],
			};
		case RESET_WORKSPACES:
			return {
				workspaces: [],
				openWorkspace: "",
				openChannel: "",
			};
		case GET_WORKSPACES:
			return {
				workspaces: action.payload,
				openWorkspace: action.payload.length > 0 ? action.payload[0]._id : "",
				openChannel:
					action.payload.length > 0 ? action.payload[0].channels[0]._id : "",
			};
		case SET_OPEN_WORKSPACE:
			return {
				...state,
				openWorkspace: action.payload,
			};
		case SET_OPEN_CHANNEL:
			return {
				...state,
				openChannel: action.payload,
			};
		default:
			return state;
	}
}
