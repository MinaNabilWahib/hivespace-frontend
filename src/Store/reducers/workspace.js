import { SET_OPEN_WORKSPACE, SET_OPEN_CHANNEL } from "../actions/types";
const INITIAL_STATE = {
	workspaces: [
		{
			_id: "62545b581ca43cc8cf5ca8be",
			title: "Test workspace",
			description: "this is a first test workspace",
			owner: "6254313eb723b4f2d2bfc8d4",
			channels: [
				{
					_id: "625454301ca43cc8cf5ca8bc",
					title: "Test Channel in first workspace",
					description: "this is a first test channel",
					owner: "6254313eb723b4f2d2bfc8d4",
					messages: [
						"625454301ca43cc8cf5ca8bc_2022-04-10",
						"625454301ca43cc8cf5ca8bc_4/11/2022",
					],
				},
				{
					_id: "625454541ca43cc8cf5ca8bd",
					title: "Test Channel 2 in first workspace",
					description: "this is a second test channel",
					owner: "6254313eb723b4f2d2bfc8d4",
				},
			],
		},
		{
			_id: "62545b581ca43cc8cf4ca8be",
			title: "Test workspace 2",
			description: "this is a second test workspace",
			owner: "6254313eb723b4f2d2bfc8d4",
			channels: [
				{
					_id: "625454301ca43cc8cf5ca8bc",
					title: "Test Channel in 2nd workspace",
					description: "this is a test channel",
					owner: "6254313eb723b4f2d2bfc8d4",
					messages: [
						"625454301ca43cc8cf5ca8bc_2022-04-10",
						"625454301ca43cc8cf5ca8bc_4/11/2022",
					],
				},
				{
					_id: "625454541ca43cc8cf5ca8bd",
					title: "Test Channel 2 in 2nd workspace",
					description: "this is a second test channel",
					owner: "6254313eb723b4f2d2bfc8d4",
				},
			],
		},
	],
	openWorkspace: "62545b581ca43cc8cf5ca8be",
	openChannel: "625454301ca43cc8cf5ca8bc",
};

export function workspaceReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
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
