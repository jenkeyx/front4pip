import React from "react";

import {createBrowserHistory} from "history";
import {Route, Router} from "react-router-dom";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import {Redirect} from "react-router";
import {connect} from 'react-redux';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={createBrowserHistory()}>
                <Route exact path='/welcome' component={Welcome}/>
                <Route path='/home' component={Home}/>
                {this.props.auth.authStatus && <Redirect to={'/home'}/>}
                {(!this.props.auth.authStatus) && <Redirect to={'/welcome'}/>}

            </Router>

        )
    }
}


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};
const mapDispatchToProps = dispatch => {

};
export default connect(mapStateToProps, mapDispatchToProps,)(App)


