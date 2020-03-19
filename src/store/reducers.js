import {combineReducers} from 'redux';
import {authReducer} from "./auth/reducers";
import {registrationReducer} from "./registration/reducers";
import {canvasReducer} from "./canvas/reducers";
import {formReducer} from "./form/reducers";

export default combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    canvas: canvasReducer,
    form: formReducer
});
