import {CHANGE_PASSWORD, AUTH_CHANGE_STATUS, CHANGE_USERNAME, CHANGE_REPEAT_PASSWORD} from "./actions";

const initialState = {
    username: '',
    password: '',
    repeatPassword: '',
    authStatus: false
};

export const authReducer = (state = initialState,action) =>{
    switch (action.type) {
        case CHANGE_USERNAME:
            return{
                ...state, username: action.payload
            };
        case CHANGE_PASSWORD:
            return {
                ...state, password: action.payload
            };
        case CHANGE_REPEAT_PASSWORD:
            return {
                ...state, repeatPassword: action.payload
            };
        case AUTH_CHANGE_STATUS:
            return {
                ...state, authStatus: action.payload
            };
        default:
            return state
    }
};
