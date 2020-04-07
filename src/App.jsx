import React, {useState} from "react";

import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import {connect} from 'react-redux';
import AuthContainer from "./components/AuthContainer";
import RegistrationContainer from "./components/RegistrationContainer";
import {ThemeProvider} from "styled-components";
import {dark, light} from "./styles/themes";
import {GlobalStyles} from "./styles/globalStyle";
import {Redirect} from "react-router";

function App(props) {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };


    return (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
            <BrowserRouter>
                <GlobalStyles/>
                <button id='themeButton' className='header-btn' onClick={toggleTheme}>{theme === 'light' ? "dark": "light"}</button>
                <Route exact path='/' component={RegistrationContainer}/>
                <Route path='/signIn' component={AuthContainer}/>
                <Route path='/home' component={Home}/>
                {props.authStatus && <Redirect to={'/home'}/>}
                {(!props.authStatus) && <Redirect to={'/'}/>}
            </BrowserRouter>
        </ThemeProvider>

    )

}


const mapStateToProps = state => {
    return {
        authStatus: state.auth.authStatus,
    }
};
export default connect(mapStateToProps)(App)


