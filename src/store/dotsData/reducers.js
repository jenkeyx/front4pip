import {FORM_CHANGE_X, FORM_CHANGE_Y, FORM_CHANGE_R, SET_DOTS} from "./actions";
import {Dot} from "../../classes/Dot"

const initialState = {
    x : 0,
    y : 0,
    r : 1,
    dots: []//new Dot(0,0,1), new Dot(1, 1,2)
};

export const dotsReducer = (state = initialState,action) =>{
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
        case SET_DOTS:
            return {
                ...state, dots: action.payload
            };
        default:
            return state
    }
};
