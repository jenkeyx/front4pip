import React from "react";
import ErrorMsg from "./ErrorMsg";
import Header from "./Header";

export default class Auth extends React.Component{

    constructor(props) {
        super(props);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.handleAuth = this.handleAuth.bind(this);
    }

    onUsernameChange(event){
        this.setErrorMsg('');
        this.props.setUsername(event.target.value)
    }

    onPasswordChange(event){
        this.setErrorMsg('');
        this.props.setPassword(event.target.value)
    }

    handleAuth(){
        const data = this.getData();
        fetch("/logging",{
            method: "POST",
            headers: new Headers({"Authorization": 'Basic' + btoa(data.username +  ":" + data.password) })
        })
            .then(response =>{if (response.status === 200) {
                this.props.setAuthStatus(true);
            }else {
                this.props.setAuthStatus(false);
                this.setErrorMsg('Неправильный логин или пароль , попробуйте занова')
            }
            })
    }
    render() {
        return(
            <div>
                <Header authStatus={this.props.authStatus}/>
                <form className="auth">
                    <h3>Sign In</h3>
                    <div>
                        <input type="text" name="login" placeholder="username" value={this.props.username} onChange={this.onUsernameChange}/>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="password" value={this.props.password} onChange={this.onPasswordChange}/>
                    </div>
                    <div>
                        <button type="button" onClick={this.handleAuth}>Sign In</button>
                    </div>
                    <ErrorMsg/>
                </form>
            </div>
        )
    }

    getData(){
        return{
            username: this.props.username,
            password: this.props.password
        }
    }
    setErrorMsg(message) {
        console.log(message);
        let errorSpan = document.getElementById('errorSpan');
        errorSpan.innerHTML = message;
    }

}