import React from "react";
import {connect} from "react-redux";
import {setPassword, setRepeatPassword, setUsername} from "../store/auth/actions";
import Registration from "./Registration";
import {setAuthStatus} from "../store/auth/actions";

class RegistrationContainer extends React.Component{
    componentDidMount() {
        this.props.setAuthStatus(false);
        console.log('Welcome auth status '+this.props.status);
    }

    render(){
        return <Registration
            username={this.props.username}  password={this.props.password}
            repeatPassword ={this.props.repeatPassword} authStatus={this.props.authStatus}
            setUsername={this.props.setUsername} setAuthStatus={this.props.setAuthStatus}
            setPassword={this.props.setPassword} setRepeatPassword ={this.props.setRepeatPassword}/>
    }

}

const mapStateToProps = state =>{
    return{
        username: state.auth.username,
        password: state.auth.password,
        repeatPassword: state.auth.repeatPassword,
        authStatus: state.auth.authStatus
    }
};
const mapDispatchToProps = {
    setUsername,
    setPassword,
    setRepeatPassword,
    setAuthStatus
};
export default connect(mapStateToProps,mapDispatchToProps)(RegistrationContainer);