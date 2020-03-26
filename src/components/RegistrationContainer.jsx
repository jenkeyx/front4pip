import React from "react";
import {connect} from "react-redux";
import {setPassword, setRepeatPassword, setUsername} from "../store/registration/actions";
import Registration from "./Registration";
import {setAuthStatus} from "../store/auth/actions";

class RegistrationContainer extends React.Component{
    render() {
        return <Registration
            username={this.props.username}  password={this.props.password}
            repeatPassword ={this.props.repeatPassword} setUsername={this.props.setUsername} setAuthStatus={this.props.setAuthStatus}
            setPassword={this.props.setPassword} setRepeatPassword ={this.props.setRepeatPassword}/>
    }
}

const mapStateToProps = state =>{
    return{
        username: state.registration.username,
        password: state.registration.password,
        repeatPassword: state.registration.repeatPassword
    }
};
const mapDispatchToProps = {
    setUsername: setUsername,
    setPassword: setPassword,
    setRepeatPassword: setRepeatPassword,
    setAuthStatus: setAuthStatus
};
export default connect(mapStateToProps,mapDispatchToProps)(RegistrationContainer);