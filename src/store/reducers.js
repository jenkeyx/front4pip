import {combineReducers} from 'redux';
import {authReducer} from "./auth/reducers";
import {dotsReducer} from "./dotsData/reducers";


export default combineReducers({
    auth: authReducer,
    dotsData: dotsReducer
});


