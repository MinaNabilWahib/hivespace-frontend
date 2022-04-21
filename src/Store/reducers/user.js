const INITIAL_STATE = {
	user: {
		_id: "62548b6b2bb752d9b45a879a",
		socialId: {
			google: "116148355872231383630",
		},
		first_name: "Murad",
		last_name: "Tag",
		email: "murad.tag.97@gmail.com",
		phone_number: "",
		country: "",
		verified: true,
		image:
			"https://lh3.googleusercontent.com/a-/AOh14Gi_PUYFD4hsLzeyESD1n8qq6Z2Wo-TSNXHkyoZG6w=s96-c",
		bio: "Add your Bio",
		status: "offline",
		workspaces: [],
		userInfo: {
			googleInfo: {
				resourceName: "people/116148355872231383630",
				etag: "%EgkBBwgLEC43P0AaBAECBQciDExGMEJWcW9UaWlnPQ==",
				genders: [
					{
						metadata: {
							primary: true,
							source: {
								type: "PROFILE",
								id: "116148355872231383630",
							},
						},
						value: "male",
						formattedValue: "Male",
					},
				],
				birthdays: [
					{
						metadata: {
							primary: true,
							source: {
								type: "PROFILE",
								id: "116148355872231383630",
							},
						},
						date: {
							year: 1997,
							month: 1,
							day: 18,
						},
					},
					{
						metadata: {
							source: {
								type: "ACCOUNT",
								id: "116148355872231383630",
							},
						},
						date: {
							year: 1997,
							month: 1,
							day: 18,
						},
					},
				],
			},
		},
		date_created: "2022-04-11T20:11:23.930Z",
		__v: 0,
	},
};

export function userReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		default:
			return state;
	}
}
