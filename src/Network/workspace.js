import { axiosInstance } from "./axiosConfig";

export const getWorkspaces = async (userId) => {
	try {
		const response = await axiosInstance.get(`/createWorkspace/${userId}`);
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};
export const getWorkspace = (workspaceId) => {};
export const addWorkspace = (workspace) => {};
export const addMemberToWorkspace = (workspaceId, userId) => {};
export const deleteWorkspace = (workspaceId) => {};
export const editWorkspace = (workspaceId, workspace) => {};
