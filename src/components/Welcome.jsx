import React from "react";
import AuthContainer from "./AuthContainer";
import RegistrationContainer from "./RegistrationContainer";
import "../styles/Welcome.css"
import Header from "./Header";

export default class Welcome extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <div id="welcome">
                    <AuthContainer/>
                    <RegistrationContainer/>
                </div>
            </div>

        )
    }
}
