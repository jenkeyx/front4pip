import React from "react";
import AuthContainer from "./AuthContainer";
import RegistrationContainer from "./RegistrationContainer";

export default class Welcome extends React.Component {
    render() {
        return(
            <div>
                <AuthContainer/>
                <RegistrationContainer/>
            </div>

        )
    }
}
