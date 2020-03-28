import React from "react";

import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import {connect} from 'react-redux';
import AuthContainer from "./components/AuthContainer";
import RegistrationContainer from "./components/RegistrationContainer";



class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Route exact path='/' component={RegistrationContainer}/>
                <Route path='/signIn' component={AuthContainer}/>
                <Route path='/home' component={Home}/>
                {/*{this.props.auth.authStatus && <Redirect to={'/home'}/>}*/}
                {/*{(!this.props.auth.authStatus) && <Redirect to={'/'}/>}*/}
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


