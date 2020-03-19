import React from "react";

import rootReducer from './store/reducers';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import AuthContainer from "./components/AuthContainer";
import RegistrationContainer from "./components/RegistrationContainer";


export default class App extends React.Component{
    render() {
        return(
            <Provider store = {createStore(rootReducer)}>
            <div className="forms">
                <AuthContainer/>
                <RegistrationContainer/>
            </div>
            </Provider>
        )
    }
}

