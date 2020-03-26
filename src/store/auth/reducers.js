import {AUTH_CHANGE_PASSWORD, AUTH_CHANGE_STATUS, AUTH_CHANGE_USERNAME} from "./actions";

const initialState = {
    username: '',
    password: '',
    authStatus: true
};

export const authReducer = (state = initialState,action) =>{
    switch (action.type) {
        case AUTH_CHANGE_USERNAME:
            return{
                ...state, username: action.payload
            };
        case AUTH_CHANGE_PASSWORD:
            return {
                ...state, password: action.payload
            };
        case AUTH_CHANGE_STATUS:
            return {
                ...state, authStatus: action.payload
            };
        default:
            return state
    }
};
