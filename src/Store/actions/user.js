import { axiosAuth, axiosInstance } from '../../Network/axiosConfig';
import { setToken } from '../../Services/tokenHandling';
import { store } from '../store';
import { me } from './../../Network/auth';
import { AUTHENTICATED, NOT_AUTHENTICATED } from "./types";
import { deleteToken } from './../../Services/tokenHandling';

export const checkAuth = (token) => async (dispatch) => {
    if (!token) {
        dispatch({
            type: NOT_AUTHENTICATED,
        })
        return null
    }
    try {
        const api = await axiosInstance.get('/me', {
            headers: { Authorization: token },
        })
        dispatch({
            type: AUTHENTICATED,
            payload: api.data.user
        })
        return api.data.user;
    } catch (error) {
        deleteToken()
        dispatch({
            type: NOT_AUTHENTICATED,
        })
        return error.response.data;
    }
}

export const authenticated = (payload) => ({
    type: AUTHENTICATED,
    payload
})

export const not_authenticated = (payload) => ({
    type: NOT_AUTHENTICATED,
})

export const loginAction = (body) => async (dispatch) => {
    try {
        const api = await axiosAuth.post('/login', {
            email: body.Email,
            password: body.Password,
        }, {
            redirect: '/'
        })
        console.log(api);
        dispatch({
            type: AUTHENTICATED,
            payload: api.data.user
        })
        setToken(api.data?.token)

        return api;
    } catch (error) {
        dispatch({
            type: NOT_AUTHENTICATED
        });
        return error.response.data;
    }

}

