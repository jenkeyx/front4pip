import {combineReducers} from 'redux';
import {authReducer} from "./auth/reducers";
import {canvasReducer} from "./canvas/reducers";
import {formReducer} from "./form/reducers";

export default combineReducers({
    auth: authReducer,
    canvas: canvasReducer,
    form: formReducer
});
