import {CANVAS_ON_HIT} from "./actions";

const initialState = {
    username: "",
    password:"",
    coordinates: [0,0,1]
};

export const canvasReducer = (state = initialState,action) =>{
    if (action.type === CANVAS_ON_HIT) {
        return{
            ...state,
            coordinates: action.payload,
        };
    } else {
        return state
    }
};
