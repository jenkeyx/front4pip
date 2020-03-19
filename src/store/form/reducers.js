import {FORM_CHANGE_X, FORM_CHANGE_Y, FORM_CHANGE_R} from "./actions";


const initialState = {
    x : 0,
    y : 0,
    r : 1
};

export const formReducer = (state = initialState,action) =>{
    switch (action.type) {
        case FORM_CHANGE_X:
            return{
                ...state, x: action.payload
            };
        case FORM_CHANGE_Y:
            return {
                ...state, y: action.payload
            };
        case FORM_CHANGE_R:
            return {
                ...state, r: action.payload
            };
        default:
            return state
    }
};
