import {
	SET_OPEN_WORKSPACE,
	SET_OPEN_CHANNEL,
	GET_WORKSPACES,
	RESET_WORKSPACES,
	ADD_WORKSPACE,
} from "./types";
import { axiosInstance } from "../../Network/axiosConfig";

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

export const getWorkspaces = (userId) => async (dispatch) => {
	try {
		const response = await axiosInstance.get(`/createWorkspace/${userId}`);
		// console.log(response.data);
		dispatch({
			type: GET_WORKSPACES,
			payload: response.data.data,
		});
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};

export const resetWorkspaces = () => {
	return {
		type: RESET_WORKSPACES,
	};
};

export const addWorkspace = (workspace) => async (dispatch) => {
	try {
		const response = await axiosInstance.post("/createWorkspace", workspace);
		dispatch({
			type: ADD_WORKSPACE,
			payload: response.data.data,
		});
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};
