import axios from "axios";
import { useDispatch } from "react-redux";
import { alertConfig } from "../Services/sweetAlert";
import { store } from "../Store/store";
import { errorHandling, loaded, loading } from "./../Store/actions/loading";
import loadingReducer from "./../Store/reducers/loading";
export const axiosInstance = axios.create({
	baseURL: "https://localhost:8000",
});

export const axiosAuth = axios.create({
	baseURL: "https://localhost:8000",
});

axiosInstance.interceptors.request.use(
	function (config) {
		//   SHOW LOADER
		store.dispatch(loading());
		console.log(config);
		// console.log("INTERCEPTOR", config);
		// Do something before request is sent
		if (localStorage.getItem("token")) {
			config.headers["Authorization"] = localStorage.getItem("token");
		}
		return config;
	},
	async function (error) {
		await alertConfig("", () => {
			store.dispatch(errorHandling(error.response.data.Error));
		}).fire({
			icon: "warning",
			title: error.response.data.Error,
			position: "center",
		});
		return Promise.reject(error);
	}
);

axiosAuth.interceptors.request.use(
	function (config) {
		store.dispatch(loading());
		console.log(config);
		return config;
	},
	async function (error) {
		await alertConfig("", () => {
			store.dispatch(errorHandling(error.response.data.Error));
		}).fire({
			icon: "warning",
			title: error.response.data.Error,
			position: "center",
		});
		return Promise.reject(error);
	}
);

// Add a response interceptor
axiosAuth.interceptors.response.use(
	async function (response) {
		await alertConfig(true, async () => {
			await store.dispatch(loaded({ token: response.data?.token }));
		}).fire({
			icon: "success",
			title: response.data?.message,
			position: "top-start",
		});
		console.log(response.data);
		return response;
	},
	async function (error) {
		console.log(error.response);
		await alertConfig("", async () => {
			await store.dispatch(errorHandling(error.response.data.Error));
		}).fire({
			icon: "warning",
			title: error.response.data.Error,
			position: "center",
		});
		return Promise.reject(error);
	}
);
