import { LOADING, LOADED, ERROR } from "../actions/types";

const INITIAL_STATE = {
    loading: false,
    data: {},
    error: ''
};

const loadingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING:
            return {
                loading: true,
                data: {},
                error: ''
            };
        case LOADED:
            return {
                loading: false,
                data: action.payload,
                error: ''
            };
        case ERROR:
            return {
                loading: false,
                data: {},
                error: action.payload
            };
        default:
            return state;
    }
}

export default loadingReducer;