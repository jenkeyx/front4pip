import React from "react";
import ErrorMsg from "./ErrorMsg";
import Header from "./Header";

export default class Registration extends React.Component{

    constructor(props) {
        super(props);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPasswordRepeatChange = this.onPasswordRepeatChange.bind(this);
        this.handleRegistration = this.handleRegistration.bind(this)
    }

    onUsernameChange(event){
        this.setErrorMsg('');
        this.props.setUsername(event.target.value)
    }

    onPasswordChange(event){
        this.setErrorMsg('');
        this.props.setPassword(event.target.value)
    }
    onPasswordRepeatChange(event){
        this.setErrorMsg('');
        this.props.setRepeatPassword(event.target.value)
    }

    handleRegistration(){
        const data = this.getData();
        fetch("/registration",{
            method: "POST",
            body: JSON.stringify(data),
            headers: new Headers({"Content-type":"application/json"})
        })
            .then(response =>{if (response.status === 200) {
                this.props.setAuthStatus(true);
                console.log("OK!")
            }else {
                this.props.setAuthStatus(false);
                this.setErrorMsg('Вы не зарегестрировались, попробуйте занова')
            }
            })
    }

    render() {
        return(
            <div>
                <Header authStatus={this.props.authStatus}/>
                <form className="registration">
                    <h3>Sign Up</h3>
                    <div>
                        <input type="text" name="login" placeholder="username" value={this.props.username} onChange={this.onUsernameChange}/>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="password" value={this.props.password} onChange={this.onPasswordChange}/>
                    </div>
                    <div>
                        <input type="password" name="repeatPassword" placeholder="repeatPassword" value={this.props.repeatPassword} onChange={this.onPasswordRepeatChange}/>
                    </div>
                    <div>
                        <button type="button" onClick={this.handleRegistration}>Sign Up</button>
                    </div>
                    <span className="errorMsg" id="errorRegSpan"> </span>
                </form>
            </div>
        )
    }
    getData(){
        return{
            username: this.props.username,
            password: this.props.password,
            repeatPassword: this.props.repeatPassword
        }
    }

    setErrorMsg(message) {
        console.log(message);
        let errorSpan = document.getElementById('errorRegSpan');
        errorSpan.innerHTML = message;
    }
}