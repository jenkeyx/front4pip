import {combineReducers} from 'redux';
import {authReducer} from "./auth/reducers";
import {registrationReducer} from "./registration/reducers";
import {canvasReducer} from "./canvas/reducers";

export default combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    canvas: canvasReducer
});
