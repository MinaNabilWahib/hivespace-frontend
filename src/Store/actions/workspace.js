import { SET_OPEN_WORKSPACE, SET_OPEN_CHANNEL } from "./types";

export const setOpenWorkspace = (payload) => {
	return {
		type: SET_OPEN_WORKSPACE,
		payload,
	};
};
export const setOpenChannel = (payload) => {
	return {
		type: SET_OPEN_CHANNEL,
		payload,
	};
};
