import React from "react";
import AuthContainer from "./AuthContainer";
import RegistrationContainer from "./RegistrationContainer";
import "../styles/Welcome.css"

export default class Welcome extends React.Component {
    render() {
        return(
            <div id="welcome">
                <AuthContainer/>
                <RegistrationContainer/>
            </div>

        )
    }
}
