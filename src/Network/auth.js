import { axiosAuth, axiosInstance } from "./axiosConfig";
import { store } from './../Store/store';
import { loginAction } from "../Store/actions/user";

export const register_post = async (body) => {
    try {
        const api = await axiosAuth.post('/register', {
            first_name: body.First_Name,
            last_name: body.Last_Name,
            email: body.Email,
            phone_number: body.Phone_Number,
            country: body.Country,
            password: body.Password,
            passwordConfirm: body.Confirm_Password
        }, {
            redirect: '/auth/login'
        })
        return api;
    } catch (error) {
        return error.response.data;
    }
}

export const login_post = async (body) => {
    return await store.dispatch(loginAction(body))
}

export const resetPassword_post = async (body) => {
    try {
        const api = await axiosAuth.post('password/reset', {
            email: body.Email,
        })
        return api;
    } catch (error) {
        return error.response.data;
    }
}

export const resetNewPasswords_post = async (body) => {
    try {
        const api = await axiosAuth.post(`password/reset/${body.id}/${body.token}`, {
            password: body.Password,
            passwordConfirm: body.Confirm_Password
        }, {
            redirect: '/auth/login'
        })
        return api;
    } catch (error) {
        return error.response.data;
    }
}

export const VerifyEmail_post = async (body) => {
    try {
        const api = await axiosAuth.post('verifyEmail', {
            email: body.Email,
        })
        return api;
    } catch (error) {
        return error.response.data;
    }
}

export const userVerify_get = async ({ id, token }) => {
    try {
        const api = await axiosAuth.get(`/user/verify/${id}/${token}`, {
            redirect: '/auth/login'
        });
        return api;
    } catch (error) {
        return error.response.data;
    }
}