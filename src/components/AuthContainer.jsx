import React from "react";
import {connect} from "react-redux";
import {setAuthStatus, setPassword, setUsername} from "../store/auth/actions";
import Auth from "./Auth";

class AuthContainer extends React.Component{
    render() {
        return <Auth username={this.props.username}  password={this.props.password} authStatus={this.props.authStatus}
                     setUsername={this.props.setUsername} setPassword={this.props.setPassword} setAuthStatus={this.props.setAuthStatus}/>
    }
}

const mapStateToProps = state =>{
return{
    username: state.auth.username,
    password: state.auth.password,
    authStatus: state.auth.authStatus
};
};
const mapDispatchToProps = {
    setUsername,
    setPassword,
    setAuthStatus
};
export default connect(mapStateToProps,mapDispatchToProps)(AuthContainer);