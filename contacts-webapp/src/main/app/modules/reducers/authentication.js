import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS} from '../actions/authentication';

const initialState = () => {
    const token = localStorage.getItem('token');
    return {
        isFetching: false,
        isAuthenticated: token ? true : false,
        token: token ? token : null
    };
};

const authentication = (state = initialState(), action) => {
    switch (action.type) {
        case (LOGIN_REQUEST):
            return {
                ...state,
                isFetching: true,
                isAuthenticated: false,
                errorMessage: ''
            };
        case (LOGIN_SUCCESS):
            return {
                ...state,
                isFetching: false,
                isAuthenticated: true,
                token: action.token,
                errorMessage: ''
            };
        case (LOGIN_FAILURE):
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            };
        case (LOGOUT_SUCCESS):
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
                token: null
            };
        default:
            return state;
    }
};

export default authentication;