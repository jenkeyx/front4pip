import React from "react";
import AuthContainer from "./AuthContainer";
import RegistrationContainer from "./RegistrationContainer";
import "../styles/Welcome.css"
import {connect} from "react-redux";
import {setAuthStatus} from "../store/auth/actions";


class Welcome extends React.Component {

    componentDidMount() {
        this.props.setAuthStatus(false);
        console.log('Welcome auth status '+this.props.status);
    }

    render() {
        return(
            <div>
                <div id="welcome">
                    <AuthContainer/>
                    <RegistrationContainer/>

                </div>
            </div>

        )
    }
}
const mapStateToProps = state =>{
    return{
        status: state.auth.authStatus
    };
};
const mapDispatchToProps = {
    setAuthStatus
};
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);