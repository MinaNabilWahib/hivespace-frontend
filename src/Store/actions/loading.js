
import { ERROR, LOADED, LOADING } from './types';

export const loading = () => ({
    type: LOADING,
});

export const loaded = (payload) => ({
    type: LOADED,
    payload,
});

export const errorHandling = (payload) => ({
    type: ERROR,
    payload,
});

