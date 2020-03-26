import React from "react";

import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import {Redirect} from "react-router";
import {connect} from 'react-redux';


class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <BrowserRouter>
                <Route exact path='/welcome' component={Welcome}/>
                <Route path='/home' component={Home}/>
                {this.props.auth.authStatus && <Redirect to={'/home'}/>}
                {(!this.props.auth.authStatus) && <Redirect to={'/welcome'}/>}
            </BrowserRouter>
        )
    }
}


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};
export default connect(mapStateToProps)(App)


