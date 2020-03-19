import React from "react";

import AuthContainer from "./components/AuthContainer";
import RegistrationContainer from "./components/RegistrationContainer";


export default class App extends React.Component{
    render() {
        return(

            <div className="forms">
                <AuthContainer/>
                <RegistrationContainer/>
            </div>

        )
    }
}


