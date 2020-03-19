import {
    REGISTRATION_CHANGE_PASSWORD,
    REGISTRATION_CHANGE_REPEAT_PASSWORD,
    REGISTRATION_CHANGE_USERNAME
} from "./actions";

const initialState = {
    username: '',
    password: '',
    repeatPassword: ''
};

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION_CHANGE_USERNAME:
            return {
                ...state, username: action.payload
            };
        case REGISTRATION_CHANGE_PASSWORD:
            return {
                ...state, password: action.payload
            };
        case REGISTRATION_CHANGE_REPEAT_PASSWORD:
            return {
                ...state, repeatPassword: action.payload
            };
        default:
            return state;
    }
};