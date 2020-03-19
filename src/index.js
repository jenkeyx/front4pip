import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import Home from "./components/Home";

import rootReducer from './store/reducers';
import {Provider} from 'react-redux';
import {createStore} from "redux";

import {Route, Router} from "react-router-dom";
import {createBrowserHistory} from "history";

ReactDOM.render(
    <Provider store = {createStore(rootReducer)}>
        <Router history={createBrowserHistory()}>
            <Route exact path='/' component={App}/>
            <Route path='/home' component={Home}/>
        </Router>
    </Provider>
    , document.getElementById('root')
);