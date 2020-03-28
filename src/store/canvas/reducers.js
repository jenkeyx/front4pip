import {CANVAS_ON_HIT} from "./actions";

const initialState = {
    dots: []
};

export const canvasReducer = (state = initialState,action) =>{
    if (action.type === CANVAS_ON_HIT) {
        return{
            ...state,
            dots: action.payload,
        };
    } else {
        return state
    }
};
